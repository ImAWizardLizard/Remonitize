import React, { Component } from 'react'
import './Dropzone.css'

class Dropzone extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className="Dropzone">
        <img
          alt="upload"
          className="Icon"
          src="baseline-cloud_upload-24px.svg"
        />
        <span>Upload Files</span>
      </div>
    );
  }
}

export default Dropzone;