import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';

export default class GalleryComponent extends Component {
  @tracked selectedImage = null;
  @tracked isModalOpen = false;
  @tracked currentPage = 1;
  itemsPerPage = 8;

  get paginatedImages() {
    const start = 0;
    const end = this.currentPage * this.itemsPerPage;
    return this.args.images.slice(start, end);
  }

  get hasMoreImages() {
    return this.paginatedImages.length < this.args.images.length;
  }

  get canShowLess() {
    return this.currentPage > 1;
  }

  @action
  showImage(image) {
    this.selectedImage = image;
    this.isModalOpen = true;
    document.body.style.overflow = 'hidden';
  }

  @action
  closeModal() {
    this.isModalOpen = false;
    this.selectedImage = null;
    document.body.style.overflow = '';
  }

  @action
  nextPage() {
    this.currentPage++;
    window.scrollTo({
      top: document.body.scrollHeight,
      behavior: 'smooth',
    });
  }

  @action
  showLess() {
    this.currentPage--;
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  }
}
