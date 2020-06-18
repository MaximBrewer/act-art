import React, { useState, useEffect, useRef } from "react";
import StackGrid, { transitions } from "react-stack-grid";

export default function HomeWaterfall() {
    const { scaleDown } = transitions;
    const [photos, setPhotos] = useState([]);

    const addGallery = () => {
        axios
            .get("/api/get_gallery_items")
            .then(res => {
                console.log(res.data.gallery);
                setPhotos(
                    <StackGrid
                        appear={scaleDown.appear}
                        appeared={scaleDown.appeared}
                        enter={scaleDown.enter}
                        entered={scaleDown.entered}
                        leaved={scaleDown.leaved}
                        columnWidth={318}
                        className="art-waterfall-inner"
                    >
                        {res.data.gallery.map((item, index) => (
                            <div>
                                <img
                                    key={index}
                                    src={item.PATH}
                                    style={{ width: "100%", height: "200px" }}
                                    className="waterfall-item"
                                />
                            </div>
                        ))}
                    </StackGrid>
                );
            })
            .catch(err => {});
    };

    //     ARTICLE: "/музыка/сергей-taff/"
    // ID: 1
    // PATH: "https://artifex.ru/wp-content/uploads/2017/08/Музыкант_Сергеи-Taff_Обложка-689x418.jpg"
    // PROPS: "2,1"
    // SIZE: 2
    // TAG: "Музыка"
    // TITLE: "Сергей Taff"

    useEffect(() => {
        addGallery();
    }, []);

    return <React.Fragment>{photos}</React.Fragment>;
}
