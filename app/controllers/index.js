import Controller from '@ember/controller';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';

export default class IndexController extends Controller {
    // Image slider properties
    @tracked currentImageIndex = 0;
    slideInterval = 3000;
    timer = null;

    // Gallery preview property
    get previewImages() {
        if (this.model && this.model.galleryImages) {
            return this.model.galleryImages.slice(0, 4);
        }
        return [];
    }

    // Form properties
    @tracked formData = {
        name: '',
        email: '',
        phone: '',
        message: ''
    };

    // Image slider methods
    get currentImage() {
        return this.model.images[this.currentImageIndex];
    }
    
    @action
    nextImage() {
        this.currentImageIndex = (this.currentImageIndex + 1) % this.model.images.length;
    }

    @action
    previousImage() {
        this.currentImageIndex = (this.currentImageIndex - 1 + this.model.images.length) % this.model.images.length;
    }

    @action
    handleManualNavigation(action) {
        this.stopSlideshow();
        action.call(this);
        this.startSlideshow();
    }

    // Form methods
    @action
    updateName(event) {
        this.formData.name = event.target.value;
    }

    @action
    updateEmail(event) {
        this.formData.email = event.target.value;
    }

    @action
    updatePhone(event) {
        this.formData.phone = event.target.value;
    }

    @action
    updateMessage(event) {
        this.formData.message = event.target.value;
    }

    @action
    async handleSubmit(event) {
        event.preventDefault();
        try {
            // Handle form submission
            alert('Thank you for your message! We will get back to you soon.');
            this.formData = {
                name: '',
                email: '',
                phone: '',
                message: ''
            };
        } catch (error) {
            alert('Sorry, there was an error sending your message. Please try again.');
        }
    }

    // Lifecycle hooks
    constructor() {
        super(...arguments);
        this.startSlideshow();
    }

    willDestroy() {
        super.willDestroy();
        this.stopSlideshow();
    }

    startSlideshow() {
        this.timer = setInterval(() => {
            this.nextImage();
        }, this.slideInterval);
    }

    stopSlideshow() {
        if (this.timer) {
            clearInterval(this.timer);
            this.timer = null;
        }
    }
}
