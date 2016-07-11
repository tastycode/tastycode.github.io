import React, {Component} from 'react';
import 'style!raw!./../node_modules/react-image-gallery/build/image-gallery.css';
import ImageGallery from 'react-image-gallery';
import victims from 'json!yaml!./victims.yml';

function victimsToGallery() {
  return victims.map( (victim) => {
    return {
      original: require(`./../images/${victim.image}`)
    }
  });
}

const images = victimsToGallery();

export default class App extends Component {
  handleImageLoad(event) {
    console.log('Image loaded ', event.target)
  }

  handlePlay() {
    this._imageGallery.play()
  }

  handlePause() {
    this._imageGallery.pause()
  }

  render() {
    return (
      <div>
        <ImageGallery
        ref={i => this._imageGallery = i}
        items={images}
        slideInterval={2000}
        onImageLoad={this.handleImageLoad}/>
        <button onClick={this.handlePlay.bind(this)}>Play</button>
        <button onClick={this.handlePause.bind(this)}>Pause</button>
      </div>
    );
  }
}
