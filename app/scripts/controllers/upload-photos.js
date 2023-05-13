"use strict";

/**
 * @ngdoc function
 * @name testMotoSmartApp.controller:UploadPhotosCtrl
 * @description
 * # UploadPhotosCtrl
 * Controller of the testMotoSmartApp
 */
angular
  .module("testMotoSmartApp")
  .controller("UploadPhotosCtrl", function ($scope) {
    $scope.capture = "environment";
    $scope.images = [
      {
        id: 1,
        name: "1.png",
      },
      {
        id: 2,
        name: "2.png",
      },
      {
        id: 3,
        name: "3.png",
      },
      {
        id: 4,
        name: "4.png",
      },
      {
        id: 5,
        name: "5.png",
      },
    ];
    const uploadedPhotosRoute = "#!/uploaded-photos";
    const afterUploadedRoute = "#!/last-form";
    const inputFileCamera = document.querySelector("#inputFileCamera");
    const inputFileGallery = document.querySelector("#inputFileGallery");

    inputFileCamera.addEventListener("change", (e) => {
      // Get a reference to the file
      const file = e.target.files[0];

      // Encode the file using the FileReader API
      const reader = new FileReader();
      reader.onloadend = () => {
        $scope.goToUploadedPhotos();
      };
      reader.readAsDataURL(file);
    });
    inputFileGallery.addEventListener("change", (e) => {
      // Get a reference to the file
      const file = e.target.files[0];

      // Encode the file using the FileReader API
      const reader = new FileReader();
      reader.onloadend = () => {
        $scope.goToUploadedPhotos();
      };
      reader.readAsDataURL(file);
    });

    $scope.openFloatingActionButton = () => {
      const floatingActionsContainer =
        document.querySelector(".floating-actions");
      console.log(floatingActionsContainer);
      if (
        floatingActionsContainer.classList.contains("floating-actions-open")
      ) {
        floatingActionsContainer.classList.remove("floating-actions-open");
      } else {
        floatingActionsContainer.classList.add("floating-actions-open");
      }
    };

    $scope.openFile = (item) => {
      if (item === "camera") {
        inputFileCamera.click();
      } else {
        inputFileGallery.click();
      }
      console.log($scope.capture);
    };

    $scope.goToUploadedPhotos = () => {
      location.href = uploadedPhotosRoute;
    };

    $scope.goToLastForm = () => {
      const floatingActionsContainer =
        document.querySelector(".floating-loader");
      floatingActionsContainer.classList.add("floating-loader-open");
      setTimeout(() => {
        floatingActionsContainer.classList.remove("floating-loader-open");
        location.href = afterUploadedRoute;
      }, 1000);
    };

    $scope.deleteImage = (image) => {
      $scope.images = $scope.images.filter((val) => val.id !== image.id);
    };
  });
