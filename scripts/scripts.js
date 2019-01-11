/*Form Validation*/
$(document).ready(function() {
  $('#feedbackForm').bootstrapValidator({
      container: '#messages',
      feedbackIcons: {
          valid: 'glyphicon glyphicon-ok',
          invalid: 'glyphicon glyphicon-remove',
          validating: 'glyphicon glyphicon-refresh'
      },
      fields: {
          name: {
              validators: {
                  notEmpty: {
                      message: 'A name is required and cannot be empty'
                  }
              }
          },
          comment: {
              validators: {
                  notEmpty: {
                      message: 'A comment is required and cannot be empty'
                  },
                  stringLength: {
                      max: 750,
                      message: 'Your comment must be less than 750 characters long'
                  }
              }
          },
          email: {
              validators: {
                  notEmpty: {
                      message: 'An email address is required and cannot be empty'
                  },
                  emailAddress: {
                      message: 'The email address is not valid'
                  }
              }
          }
      }
  });
});

/*Plant Footer*/

$(document).ready(function() {

 var docHeight = $(window).height();
 var footerHeight = $('#footer').height();
 var footerTop = $('#footer').position().top + footerHeight;

 if (footerTop < docHeight) {
  $('#footer').css('margin-top', 0+ (docHeight - footerTop) + 'px');
 }
});

/*Tab Load inside Modal*/
$(function() {
  $('.legal-tabs li').on('click', function() {
    var tab = $(this).index();
    $('#portModal .modal-body .nav-pills a:eq(' + tab + ')').tab('show');
  });
});
