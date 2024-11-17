import Route from '@ember/routing/route';
import fetch from 'fetch';

export default class GalleryRoute extends Route {
  async model() {
    try {
      const response = await fetch('/assets/images/gallery.json');
      if (!response.ok) {
        throw new Error('Failed to fetch gallery data');
      }
      const data = await response.json();
      return data.gallery;
    } catch (error) {
      console.error('Error loading gallery:', error);
      return []; // Return empty array as fallback
    }
  }
}
