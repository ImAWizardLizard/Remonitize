import React, { Component, useState } from 'react'
import './Dropzone.css'
import axios from 'axios';
import Alert from 'react-bootstrap/Alert';
import Button from 'react-bootstrap/Button';

class Dropzone extends Component {
  constructor(props) {
    super(props)
    this.state = { hightlight: false }
    this.fileInputRef = React.createRef()

    this.openFileDialog = this.openFileDialog.bind(this)
    this.onFilesAdded = this.onFilesAdded.bind(this)
    this.onDragOver = this.onDragOver.bind(this)
    this.onDragLeave = this.onDragLeave.bind(this)
    this.onDrop = this.onDrop.bind(this)
  }

  openFileDialog() {
    if (this.props.disabled) return
    this.fileInputRef.current.click()
  }

  onFilesAdded(evt) {
    if (this.props.disabled) return
    const files = evt.target.files
    if (this.props.onFilesAdded) {
      const array = this.fileListToArray(files)
      this.props.onFilesAdded(array)
    }
  }

  onDragOver(evt) {
    evt.preventDefault()

    if (this.props.disabled) return

    this.setState({ hightlight: true })
  }

  onDragLeave() {
    this.setState({ hightlight: false })
  }

  onDrop(event) {
    event.preventDefault()

    if (this.props.disabled) return

    const files = event.dataTransfer.files
    if (files.length === 0){return('Quit with 0 files')}
    if (files.length > 1){return(console.log('Quit with more than 1 file: (' + files.length + ') given'));}
    
    if (this.props.onFilesAdded) {
      const array = this.fileListToArray(files)
      this.props.onFilesAdded(array)
    }
    this.setState({ hightlight: false })
    axios.post("http://localhost:8080/upload", files, {}).then(res => { // then print response status
      console.log(res.statusText)
    })
  }

  fileListToArray(list) {
    const array = []
    for (var i = 0; i < list.length; i++) {
      array.push(list.item(i))
    }
    
    if (array.length === 0){return(console.log('Quit with 0 items'))}
    if (array.length > 1){console.log('Quit with excessive items: (' + array.length + ') uploaded.'); alert('Only one file can be uploaded at a time')}
    return array
  }

  render() {
    return ( 
      <div
        className={`Dropzone ${this.state.hightlight ? 'Highlight' : ''}`}
        onDragOver={this.onDragOver}
        onDragLeave={this.onDragLeave}
        onDrop={this.onDrop}
        onClick={this.openFileDialog}
        style={{ cursor: this.props.disabled ? 'default' : 'pointer' }}
      >
        <input
          ref={this.fileInputRef}
          className="FileInput"
          type="file"
          multiple
          onChange={this.onFilesAdded}
        />
        <img
          alt="upload"
          className="Icon"
          src="baseline-cloud_upload-24px.svg"
        />
        <span>Upload Files</span>
      </div>
    )
  }
}

function AlertDismissibleExample() {
  const [show, setShow] = useState(true);

  if (show) {
    return (
      <Alert variant="danger" onClose={() => setShow(false)} dismissible>
        <Alert.Heading>Oh snap! You got an error!</Alert.Heading>
        <p>
          Change this and that and try again. Duis mollis, est non commodo
          luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit.
          Cras mattis consectetur purus sit amet fermentum.
        </p>
      </Alert>
    );
  }
  return <Button onClick={() => setShow(true)}>Show Alert</Button>;
}


export default Dropzone