/* eslint-disable id-length */
/* eslint-disable no-magic-numbers */
/* eslint-disable max-statements */
/* eslint-disable func-style */
/* eslint-disable max-len */
/* eslint-disable sort-keys */

const projectList = {
  'firstProject': {
    'image': {
      'prj-img': 'images/mobile-popup.png',
      'altText': 'This image is a project thumbnail',
      'prj-img-1': 'images/mobile-popup.jpg'
    },
    'projectHeading': 'Multi Post Stories: Gain + Glory',
    'popupHeading': 'Keeping track of hundreds of components',
    'description':
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea',
    'languages': [
'Ruby on Rails',
'CSS',
'JavaScript',
'HTML'
],
    'projectButton': 'See Project',
    'liveVersion': 'https://donard97.github.io/Personal-Portofolio//',
    'sourceCode': 'https://github.com/Donard97'
  },

  'secondProject': {
    'image': {
      'imageUrl': './images/mobile-popup.jpg',
      'altText': 'This image is a project thumbnail',
      'modalImage': './images/mobile-popup.jpg'
    },
    'projectHeading': 'Multi Post Stories: Gain + Glory',
    'popupHeading': 'Keeping track of hundreds of components',
    'description':
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea',
    'languages': [
'Ruby on Rails',
'CSS',
'JavaScript',
'HTML'
],
    'projectButton': 'See Project',
    'liveVersion': 'https://donard97.github.io/Personal-Portofolio//',
    'sourceCode': 'https://github.com/Donard97'
  },

  'thirdProject': {
    'image': {
      'imageUrl': './images/mobile-popup.jpg',
      'altText': 'This image is a project thumbnail',
      'modalImage': './images/mobile-popup.jpg'
    },
    'projectHeading': 'Multi Post Stories: Gain + Glory',
    'popupHeading': 'Keeping track of hundreds of components',
    'description':
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea',
    'languages': [
'Ruby on Rails',
'CSS',
'JavaScript',
'HTML'
],
    'projectButton': 'See Project',
    'liveVersion': 'https://donard97.github.io/Personal-Portofolio//',
    'sourceCode': 'https://github.com/Donard97'
  },

  'fourthProject': {
    'image': {
      'imageUrl': './images/mobile-popup.jpg',
      'altText': 'This image is a project thumbnail',
      'modalImage': './images/mobile-popup.jpg'
    },
    'projectHeading': 'Multi Post Stories: Gain + Glory',
    'popupHeading': 'Keeping track of hundreds of components',
    'description':
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea',
    'languages': [
'Ruby on Rails',
'CSS',
'JavaScript',
'HTML'
],
    'projectButton': 'See Project',
    'liveVersion': 'https://donard97.github.io/Personal-Portofolio//',
    'sourceCode': 'https://github.com/Donard97'
  },

  'fifthProject': {
    'image': {
      'imageUrl': './images/mobile-popup.jpg',
      'altText': 'This image is a project thumbnail',
      'modalImage': './images/mobile-popup.jpg'
    },
    'projectHeading': 'Multi Post Stories: Gain + Glory',
    'popupHeading': 'Keeping track of hundreds of components',
    'description':
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea',
    'languages': [
'Ruby on Rails',
'CSS',
'JavaScript',
'HTML'
],
    'projectButton': 'See Project',
    'liveVersion': 'https://donard97.github.io/Personal-Portofolio//',
    'sourceCode': 'https://github.com/Donard97'
  },

  'sixthtProject': {
    'image': {
      'imageUrl': './images/mobile-popup.jpg',
      'altText': 'This image is a project thumbnail',
      'modalImage': './images/mobile-popup.jpg'
    },
    'projectHeading': 'Multi Post Stories: Gain + Glory',
    'popupHeading': 'Keeping track of hundreds of components',
    'description':
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea',
    'languages': [
'Ruby on Rails',
'CSS',
'JavaScript',
'HTML'
],
    'projectButton': 'See Project',
    'liveVersion': 'https://donard97.github.io/Personal-Portofolio//',
    'sourceCode': 'https://github.com/Donard97'
  }
};

const projects = [
  projectList.firstProject,
  projectList.secondProject,
  projectList.thirdProject,
  projectList.forthProject,
  projectList.fifthProject,
  projectList.sixthProject
];

function modalFunction (number) {
  const modalDisplay = document.querySelector('#modal');
  modalDisplay.classList.toggle('hidden');
  const modaltitle = document.querySelector('.modal-heading');
  const modallist = document.querySelector('.modal-list');
  modallist.innerHTML = '';
  const modalImg = document.querySelector('.modal-image');
  const modalDesc = document.querySelector('.modal-p');
  const buttonLive = document.querySelector('.f-icon-1');

  modaltitle.innerHTML = projects[number].popupHeading;

  for (let i = 0; i < projects[number].languages.length; i += 1) {
    const list = document.createElement('li');
    list.textContent = projects[number].languages[i];
    modallist.appendChild(list);
  }
  buttonLive.setAttribute(
    'onclick',
    `windows.open('${projects[number].liveVersion}', '_blank');`
  );
  buttonLive.setAttribute(
    'onclick',
    `windows.open('${projects[number].sourceCode}', '_blank');`
  );
  modalDesc.innerHTML = projects[number].description;

  modalImg.setAttribute(
    'src',
    `${projects[number].image.modalImage + (number + 1)}.png`
  );
}

function toggle () {
  const card = document.querySelector('#modal');
  card.classList.toggle('hidden');
}

modalFunction(1);
toggle();
