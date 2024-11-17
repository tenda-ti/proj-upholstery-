import Route from '@ember/routing/route';
import fetch from 'fetch';

export default class IndexRoute extends Route {
    async model() {
        const response = await fetch('/assets/images/gallery.json');
        const data = await response.json();
        return {
            images: [
                '/assets/images/img1.jpg',
                '/assets/images/img2.jpg',
                '/assets/images/sofa1.jpg',
             
                 ],
            galleryImages: data.gallery 
        };
    }
}
