import $ from 'jquery';

class Modal {
	constructor() {
		this.openModalButton = $(".open-modal");
		this.modal= $(".modal");
		this.closeModalButton = $(".modal__close");
		this.events(); //starts as soon as page loads
	}

	events() {
		// clicking open modal button
		this.openModalButton.click(this.openModal.bind(this)); //makes sure this points to the right thing

		//clicking the x close modal button
		this.closeModalButton.click(this.closeModal.bind(this));

		//pushes escape key
		$(document).keyup(this.keyPressHandler.bind(this));
	}

	keyPressHandler(e) {
		if (e.keyCode == 27) {
			this.closeModal();
		}
	}

	openModal() {
		this.modal.addClass("modal--is-visible");
		return false;
	}

	closeModal() {
		this.modal.removeClass("modal--is-visible");
		return false;
	}
}

export default Modal;