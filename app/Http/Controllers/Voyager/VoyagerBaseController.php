<?php

namespace App\Http\Controllers\Voyager;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Str;
use ReflectionClass;
use TCG\Voyager\Database\Schema\SchemaManager;
use TCG\Voyager\Database\Schema\Table;
use TCG\Voyager\Database\Types\Type;
use TCG\Voyager\Events\BreadAdded;
use TCG\Voyager\Events\BreadDeleted;
use TCG\Voyager\Events\BreadUpdated;
use TCG\Voyager\Facades\Voyager;
use Exception;

class VoyagerBaseController extends \TCG\Voyager\Http\Controllers\VoyagerBaseController
{
    /**
     * Get BREAD relations data.
     *
     * @param Request $request
     *
     * @return mixed
     */
    public function resort(Request $request)
    {
        $modelName = $request->post('model');
        $ids = explode(",", $request->post('ids'));
        if(!$modelName || !is_array($ids)) return false;
        foreach($ids as $key => $id){
            $model = ("App\\".$modelName)::find($id);
            $model->update([
                'sort' => $key
            ]);
        }
        return $ids;
    }
    /**
     * Get BREAD relations data.
     *
     * @param Request $request
     *
     * @return mixed
     */

    public function addRelation(Request $request)
    {
        $slug = $this->getSlug($request);
        $page = $request->input('page');
        $on_page = 50;
        $search = $request->input('search', false);
        $dataType = Voyager::model('DataType')->where('slug', '=', $slug)->first();

        $method = $request->input('method', 'add');

        $model = app($dataType->model_name);
        if ($method != 'add') {
            $model = $model->find($request->input('id'));
        }
        $this->authorize($method, $model);


        $rows = $dataType->{$method . 'Rows'};

        if ($value = $request->input('value'))
            foreach ($rows as $key => $row) {
                if ($row->field === $request->input('type')) {

                    $options = $row->details;
                    $model = app($options->model);

                    $result = $model::create([
                        'title' => $value
                    ]);

                    return response()->json([
                        'id'    => $result->id,
                        'title'    => $result->title,
                    ]);
                }
            }

        // No result found, return empty array
        return response()->json([], 404);
    }
}
