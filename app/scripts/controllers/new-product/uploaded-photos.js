"use strict";

/**
 * @ngdoc function
 * @name testMotoSmartApp.controller:UploadedPhotosCtrl
 * @description
 * # UploadedPhotosCtrl
 * Controller of the testMotoSmartApp
 */
angular
  .module("testMotoSmartApp")
  .controller("UploadedPhotosCtrl", function ($scope) {
    const inputFileGallery = document.querySelector("#inputFileGallery");
    $scope.loadedImages = [];
    $scope.loadedImages = images();

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

    $scope.openFile = (item) => {
      inputFileGallery.click();
    };

    $scope.goToLastForm = () => {
      sessionStorage.setItem("images", JSON.stringify($scope.loadedImages));
      const floatingActionsContainer =
        document.querySelector(".floating-loader");
      floatingActionsContainer.classList.add("floating-loader-open");
      setTimeout(() => {
        floatingActionsContainer.classList.remove("floating-loader-open");
        location.href = "#!/price-form";
      }, 1000);
    };

    $scope.deleteImage = (image) => {
      const localImages = images();
      $scope.loadedImages = localImages.filter((val) => val.id !== image.id);
      sessionStorage.setItem("images", JSON.stringify($scope.loadedImages));
    };
  });
