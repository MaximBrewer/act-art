<?php

namespace App\Http\Controllers\Voyager;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use TCG\Voyager\Facades\Voyager;
use TCG\Voyager\Http\Controllers\VoyagerBaseController;

class VoyagerUserController extends VoyagerBaseController
{
    public function profile(Request $request)
    {
        $route = '';
        $dataType = Voyager::model('DataType')->where('model_name', Auth::guard(app('VoyagerGuard'))->getProvider()->getModel())->first();
        if (!$dataType && app('VoyagerGuard') == 'web') {
            $route = route('voyager.users.edit', Auth::user()->getKey());
        } elseif ($dataType) {
            $route = route('voyager.' . $dataType->slug . '.edit', Auth::user()->getKey());
        }

        return Voyager::view('voyager::profile', compact('route'));
    }

    // POST BR(E)AD
    public function update(Request $request, $id)
    {
        if (Auth::user()->getKey() == $id) {
            $request->merge([
                'role_id'                              => Auth::user()->role_id,
                'user_belongstomany_role_relationship' => Auth::user()->roles->pluck('id')->toArray(),
            ]);
        }

        return parent::update($request, $id);
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
