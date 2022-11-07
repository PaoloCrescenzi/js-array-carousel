const imagesList = [
    "img/01.webp",
    "img/02.webp",
    "img/03.webp",
    "img/04.webp",
    "img/05.webp"
  ];
  
  const mainImgContainer = document.querySelector( ".main-img-container" );
  const thumbImgContainer = document.querySelector( ".thumb-img-container" );
  const btnNext = document.getElementById( "btn_next" );
  const btnPrev = document.getElementById( "btn_prev" );
  
  let currentImgIndex = 0;
  
  
 
  for ( let i = 0; i < imagesList.length; i++ ) {

    const currentImg = imagesList[ i ];
  

    const imgEl = document.createElement( "img" );
    imgEl.src = currentImg;
    imgEl.classList.add( "img-fluid", "da-js" );
  
    const thumbEl = document.createElement( "img" );
    thumbEl.src = currentImg;
  

    if ( i === currentImgIndex ) {
      imgEl.classList.add( "active" );
      thumbEl.classList.add( "active" );
    }
  
  
    mainImgContainer.append( imgEl );
    thumbImgContainer.append( thumbEl );
  }
  
  
  btnNext.addEventListener( "click", function () {
    currentImgIndex++;

    const oldActiveEl = mainImgContainer.querySelector( ".active" );
    const oldThumbActiveEl = thumbImgContainer.querySelector( ".active" );
  
    oldActiveEl.classList.remove( "active" );
    oldThumbActiveEl.classList.remove( "active" );
  
    const imgElements = mainImgContainer.querySelectorAll( "img" );
    const thumbElements = thumbImgContainer.querySelectorAll( "img" );
  
    const newActiveEl = imgElements[ currentImgIndex ];
    const newThumbActiveEl = thumbElements[ currentImgIndex ];
  
    newActiveEl.classList.add( "active" );
    newThumbActiveEl.classList.add( "active" );
  } );