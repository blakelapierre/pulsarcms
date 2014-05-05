'use strict';

function FilesService ( ) {
  
  this.promptForFile = function (onSuccess) {
    var input = document.createElement('input'); // Should this be moved out? I think so, what's the best way?
    input.type = 'file';

    angular.element(input).bind('change', function(e) {
      onSuccess(e.target.files[0]);
    });

    input.click();
  };

}

FilesService.$inject = [

];

angular.module('pulsarClientApp')
.service('Files', FilesService);