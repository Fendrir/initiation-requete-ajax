console.log("prout");

// var jqxhr = $.ajax( "http://192.168.1.12:8000/public/secret.json" )
//   .done(function() {
//     alert( "success" );
//   })
//   .fail(function() {
//     alert( "error" );
//   })
//   .always(function() {
//     alert( "complete" );
//   });

//   $.ajax({
//   url: "http://192.168.1.12:8000/public/secret.json",
// })
//   .done(function( html ) {
//     $( "#afficher" ).append( html );
//   });


//----------------------------------------- Envoyer la requete -----------------------------------
$("#loader").hide();

$(document).ready(function(){

	$("#envoyer").click (function() {

		$("#loader").show();

		$.ajax({

			method: "POST",
			url: "http://192.168.1.12:8000/users",
			data: { name:'febvre', prenom:'julien',content:"le survivant de Koh-Simplon"  },
			success: function(send){
				$( "#afficher" ).html( " ça marche " );
				$("#loader").hide();

				$.ajax({

					method: "GET",
					url: "http://192.168.1.12:8000/users",
					data: { name:'pol'},
					success: function(send){
						$( "#afficher" ).html("Le content est : " + send.content + " ça marche " )
					},

					error: function(send){
						$( "#afficher" ).html( " et merde " )
					},

					complete: function(send){
						$( "#afficher" ).append( " youpi " )
					}
				});
			},

			error: function(send){
				$( "#afficher" ).html( " et merde " );
				$("#loader").hide();
			},

			complete: function(send){
				$( "#afficher" ).append( " youpi " );
			}

		});



	});


});