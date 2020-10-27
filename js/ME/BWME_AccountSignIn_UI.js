
function BWME_AccountSignIn_UI ( h ) {
	$.jsfrom('app-js/vb526/bwme/BWME_Svg_Res.js', function(){

		var o = new BWME_AccountSignIn_UI_Instance ;
		if( typeof h === 'function' ) h.bind(o)(o) ;

	} );

}

function BWME_AccountSignIn_UI_Instance () {
	this.__proto__.__proto__ = __bweb__event_implement.prototype ;

	this.__int();
}
BWME_AccountSignIn_UI_Instance.prototype.__int = function() {
	var Main = this ;

	Main.N = $.N(`<div>
		<div class='texa_left ani_fade'>Sign-In</div>
		<br>

		<div class='boxh_200px'>
			${ BWME_Svg_Res['logo_0'] }
		</div>

		<span id='BWMe_msg37823x' class='texa_left'></span>

		<div class='texa_center'>
			<div id='loader7343d8xy'></div>
			<br>

			<div id='N-390287X87x'>
				<input id='BWMe_inp37826x72a' class='w_50p m-w_80p padl_10p padr_10p borrd_4 col_a4 bgc_5' name='username' placeholder='User Name'>
				<input id='BWMe_inp37826x73a' class='w_50p m-w_80p padl_10p padr_10p borrd_4 col_a4' name='password' placeholder='Password' type='password'>
			<br>
			<br>
			</div>
		</div>

		<div>
			<div id='msg7328378x' class='texa_center'></div>
			<div class='boxa_center'>
				<button id='BWMe_btnmainstart7382x' class='w_10p m-w_20p borrdl_4'>\u27F5</button>
				<button id='BWMe_btnsignin7383x' class='col_z13 w_40p m-w_60p bgc_a5 borrdr_4'>Sign-In</button>
			</div>
		</div>

	</div>`) ;

	var msg_0 = $.N(`<p class='fons_t'>Checking and collecting info...</p>`);

	Main.N['#BWMe_btnsignin7383x'].on('click', function(){
		var BTN = this ;

		var data = {
			ac:'--accountauthorize',
			form:{
				userName: Main.N['_username'].value(),
				passWord: Main.N['_password'].value()

			}
		}

		//? send form
			var t_Load_api = $.UX.tLoad();

			$.server({
				urlj:'https://81c2df3e.eu-gb.apigw.appdomain.cloud/bigbrotherrhome/bw/me/apis',
				post: data
			})
			.on('loadstart', function(){
				Main.N['#N-390287X87x'].class('dis_none') ;

				BTN.Btn.loadPlay( '...' );
				BTN.disb();

				msg_0.to( Main.N['#msg7328378x'] ) ;
				t_Load_api.play( BTN, { fill:true } ) ;
				
			})
			.on('loadend', function(){

				t_Load_api.stop( ()=>{
					Main.N['#N-390287X87x'].class('dis_block') ;

					BTN.Btn.loadStop();
					BTN.disb( false );

					msg_0.rem() ;

				} ) ;

			})
			.on('true', function( r ){
				//? store user basic info / auth info

					Main.__fireEvent( 'login', r.data ) ;

					$.keep('BWMe_user_info', r.data ) ; //? set Me user

				//

			})
			.on( 'false', function(){
				// $.UX.pop( 'Me Id or Account not found.', { title:"ME Authorization" } ) ;

			} )		
			.ready();

		//


	});

	Main.N['#BWMe_btnmainstart7382x'].on('click', function(){
		// N_start['#BWMe_body3627356124hh'].Views().show('/Start');
	})

};
