import React from 'react'
import {Link} from 'react-router-dom'
import '../../static/css/gallery/foundation.min.css'
import '../../static/css/gallery/set1.css'

class OnePicture extends React.Component {
    render() {
        return (
            <li className="masonry-item grid">
                <figure className="effect-sarah"><img src={require(`./images/gallery/${this.props.picId}.jpg`)} alt=""/>
                    <figcaption>
                        <h2>Photo <span>Title</span></h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </figcaption>
                </figure>
            </li>
        )
    }
}

class MyGallery extends React.Component {

    constructor(props) {
        super(props);
        this.handleGalleryStyle = this.handleGalleryStyle.bind(this);
    }

    componentDidMount() {
        this.handleGalleryStyle();
        console.log("组件加载完成")
    }

    handleGalleryStyle() {
        $(document)
            .ready(function ($) {
                // Replace "tada" with an effect from the "effects.css" file.
                var effect = 'animate tada';
                var masonry_selector = '.masonry';
                var masonry_item_selector = '.masonry-item';
                // Initialize Masonry.
                var $masonry = $(masonry_selector)
                    .masonry({
                        itemSelector: masonry_item_selector
                    });
                // Find and hide the items.
                var $masonry_items = $masonry
                    .find(masonry_item_selector)
                    .hide();
                // Wait for the images to load.
                $masonry
                    .imagesLoaded()
                    // An image has been loaded.
                    .progress(function (instance, image) {
                        // Add the effect.
                        var $image = $(image.img)
                            .addClass(effect);
                        // Find and show the item.
                        var $item = $image
                            .parents(masonry_item_selector)
                            .show();
                        // Lay out Masonry.
                        $masonry
                            .masonry();
                    });
                /**
                 * Change the effect.
                 *
                 * Please note that you should remove the code below because it's required only for the demo.
                 */
                $('select[name="effects"]')
                    .on('change', function () {
                        var old_effect = effect;
                        // Set the new effect.
                        effect = 'animate ' + $(this).val();
                        // Remove the appended items.
                        $masonry
                            .find('.infinite-scroll-item')
                            .remove();
                        // Show the pagination.
                        $('.pagination')
                            .show();
                        // Empty the ".loading" container.
                        $('.loading')
                            .empty();
                        // Remove the previous effect and add the new one.
                        $masonry
                            .find('img')
                            .removeClass(old_effect)
                            .addClass(effect);
                        // Lay out Masonry.
                        $masonry
                            .masonry();
                        // Reset Infinite Scroll.
                        $masonry
                            .infinitescroll('destroy')
                            .data('infinitescroll', null);
                    });
            });
    }

    render() {
        const picNum = 21;
        let pictures = [];
        for (let i = 1; i <= picNum; i++) {
            pictures.push(<OnePicture picId={i} key={i}/>);
        }
        return (
            <div>
                <div style={{ position: "absolute", width: "100%"}}>
                    <Link to="/">
                        <div className="app_back_icon">Backく</div>
                    </Link>
                    <Link to="/test">
                        <div className="gallery_upload_icon">上传照片</div>
                    </Link>
                </div>
                <div className="app_list_title" style={{paddingBottom: "30px"}}>Gallery</div>
                <div className="takeMeHome" style={{paddingBottom: "30px"}}>
                    <Link to="/photos" className="linkcontent"><span>旧版相册</span></Link>
                </div>
                <main className="main-wrapper" id="container">
                    <div className="wrapper">
                        <div className="">
                            <ul className="small-block-grid-2 medium-block-grid-3 large-block-grid-5 masonry">
                                {pictures}
                            </ul>
                        </div>
                    </div>
                </main>
            </div>
        );
    }
}

export default MyGallery