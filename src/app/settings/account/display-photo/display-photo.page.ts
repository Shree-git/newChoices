import { Component, OnInit } from '@angular/core';
import { AngularFireStorage } from '@angular/fire/storage';
import { AuthenticationService } from 'src/app/services/authentication.service';


@Component({
  selector: 'app-display-photo',
  templateUrl: './display-photo.page.html',
  styleUrls: ['./display-photo.page.scss'],
})
export class DisplayPhotoPage implements OnInit {
  file: File
  downloadURL: string
  constructor(private firebase: AngularFireStorage, private authService: AuthenticationService) { }

  ngOnInit() {
  }

  photoChanged(photo){
    
    var storageRef = this.firebase.storage.ref()
    this.file = photo.target.files
    console.log(this.file[0].name)
    var uploadTask = storageRef.child('images/' + this.file[0].name).put(this.file[0])

    uploadTask.on('state_changed', function(snapshot){ 
      var progress =  
       (snapshot.bytesTransferred / snapshot.totalBytes) * 100; 
     
      
        switch (snapshot.state) { 
          case this.firebase.storage.TaskState.PAUSED: 
            console.log('Upload is paused'); 
            break; 
          case this.firebase.storage.TaskState.RUNNING: 
            console.log('Upload is running'); 
            break; 
        } 
    }, function(error) {console.log(error); 
    }, function() { 
          // Upload completed successfully, now we can get the download URL
      uploadTask.snapshot.ref.getDownloadURL().then((downloadURL) =>{
      this.downloadURL = downloadURL
        console.log('File available at', downloadURL);
      this.authService.updatePhotoURL(this.downloadURL)
  })})
  
}

  getPhoto(){
    if(this.authService.getUserInfo().photoURL){
     return this.authService.getUserInfo().photoURL
    }
    return
  }
}
