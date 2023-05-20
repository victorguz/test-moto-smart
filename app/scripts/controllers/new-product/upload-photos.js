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
    const uploadedPhotosRoute = "#!/uploaded-photos";
    const inputFileCamera = document.querySelector("#inputFileCamera");
    const inputFileGallery = document.querySelector("#inputFileGallery");
    $scope.loadedImages = [];
    $scope.openFloatingActionButton = openFloatingActionButton;
    $scope.loadedImages = images();
    inputFileCamera.addEventListener("change", async (e) => {
      const files = e.target.files;
      for (const file of files) addImage(await toBase64(file));
    });

    inputFileGallery.addEventListener("change", async (e) => {
      const files = e.target.files;
      for (const file of files) addImage(await toBase64(file));
    });

    function images() {
      const localImages = sessionStorage.getItem("images");
      return localImages ? JSON.parse(localImages) : [];
    }

    function addImage(base64) {
      $scope.loadedImages.push({ id: Date.now(), base64 });
    }

    function toBase64(file) {
      return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => resolve(reader.result);
        reader.onerror = reject;
      });
    }

    function openFloatingActionButton() {
      const floatingActionsContainer =
        document.querySelector(".floating-actions");
      if (
        floatingActionsContainer.classList.contains("floating-actions-open")
      ) {
        floatingActionsContainer.classList.remove("floating-actions-open");
      } else {
        floatingActionsContainer.classList.add("floating-actions-open");
      }
    }

    $scope.openFile = (item) => {
      if (item === "camera") {
        inputFileCamera.click();
      } else {
        inputFileGallery.click();
      }
    };

    $scope.goToUploadedPhotos = () => {
      sessionStorage.setItem("images", JSON.stringify($scope.loadedImages));
      location.href = uploadedPhotosRoute;
    };
  });
