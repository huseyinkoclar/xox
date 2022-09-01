<link href="//db.onlinewebfonts.com/c/cc63b5326666e8b3d5ec57931e016f96?family=Pixel+Font7" rel="stylesheet" type="text/css"/>


<script>
  
import { ref } from 'vue';
import Popup from './components/Popup.vue';

  export default {
    data() {
      return {
        c1: '',
        c2: '',
        c3: '',
        c4: '',
        c5: '',
        c6: '',
        c7: '',
        c8: '',
        c9: ''
      }
    },
    components: {
    Popup
    },
    setup () {
		const popupTriggers = ref({
			buttonTrigger: false
		});
		const TogglePopup = (trigger) => {
      console.log(trigger);
      console.log(popupTriggers.value[trigger]);
			popupTriggers.value[trigger] = !popupTriggers.value[trigger]
      //buttonTrigger = !buttonTrigger;
		}
    return {
			Popup,
			popupTriggers,
			TogglePopup
		}
	},
    methods: {
      changeValue: function(name) {
        if(this[name] == ''){
          this[name] = 'X';
        }
        if(this.checkWinner()) return;
        this.turnComputer();
        if(this.checkWinner()) return;
      },
      checkWinner: function checkWinner(){
        if(this.c1 == this.c2 && this.c2 == this.c3 && this.c3 != ''){
          //alert('Winner is ' + this.c3);
          return true;
        }
        if(this.c4 == this.c5 && this.c5 == this.c6 && this.c6 != ''){
          //alert('Winner is ' + this.c6);
          return true;
        }
        if(this.c7 == this.c8 && this.c8 == this.c9 && this.c9 != ''){
          //alert('Winner is ' + this.c9);
          return true;
        }
        if(this.c1 == this.c4 && this.c4 == this.c7 && this.c7 != ''){
          //alert('Winner is ' + this.c7);
          return true;
        }
        if(this.c2 == this.c5 && this.c5 == this.c8 && this.c8 != ''){
          //alert('Winner is ' + this.c8);
          return true;
        }
        if(this.c3 == this.c6 && this.c6 == this.c9 && this.c9 != ''){
          //alert('Winner is ' + this.c9);
          return true;
        }
        if(this.c1 == this.c5 && this.c5 == this.c9 && this.c9 != ''){
          //alert('Winner is ' + this.c9);
          return true;
        }
        if(this.c3 == this.c5 && this.c5 == this.c7 && this.c7 != ''){
          //alert('Winner is ' + this.c7);
          return true;
        }
        return false;
      },
      resetGame: function resetGame(){
        this.c1 = '';
        this.c2 = '';
        this.c3 = '';
        this.c4 = '';
        this.c5 = '';
        this.c6 = '';
        this.c7 = '';
        this.c8 = '';
        this.c9 = '';
      },
      turnComputer: function turnComputer(){
        var random = Math.floor(Math.random() * 9) + 1;
        if(this['c' + random] == ''){
          this['c' + random] = 'O';
        }else{
          this.turnComputer();
        }
        this.checkWinner();
      },
    }
  }
  </script>
  
  <template>
    <main>
		<Popup 
			v-if="checkWinner()"
			:TogglePopup="() => TogglePopup('buttonTrigger')">
			
      
		</Popup>
	</main>
    <div>
      <div>
        <h1 class = "title">WELCOME THE XOX GAME</h1>
      </div>
      <div class = "center">
        <table class = "table">
          <tr>
            <td @click="changeValue('c1')" style = "border-right: 4px solid grey" class = "td">{{c1}}</td>
            <td @click="changeValue('c2')" style = "border-right: 4px solid grey" class = "td">{{c2}}</td>
            <td @click="changeValue('c3')" class = "td">{{c3}}</td>
          </tr>
          <tr>
            <td @click="changeValue('c4')" style = "border-top: 4px solid grey; border-right: 4px solid grey" class = "td">{{c4}}</td>
            <td @click="changeValue('c5')" style = "border-top: 4px solid grey; border-right: 4px solid grey" class = "td">{{c5}}</td>
            <td @click="changeValue('c6')" style = "border-top: 4px solid grey" class = "td">{{c6}}</td>
          </tr>
          <tr>
            <td @click="changeValue('c7')" style = "border-top: 4px solid grey; border-right: 4px solid grey" class = "td">{{c7}}</td>
            <td @click="changeValue('c8')" style = "border-top: 4px solid grey; border-right: 4px solid grey" class = "td">{{c8}}</td>
            <td @click="changeValue('c9')" style = "border-top: 4px solid grey" class = "td">{{c9}}</td>
          </tr>
        </table>
      </div>
      <div>
        <h5 class = "information">Created by: HUSEYIN KOCLAR <a style="padding:14px; position: absolute; top:-22px" href = "https://github.com/huseyinkoclar" target = "_self"> 
         <img src = "/github.logo.png" alt = "Tutorials Point"/> 
      </a></h5>
      </div>
    </div>
  </template>
  


  <style scoped>
  @import url(//db.onlinewebfonts.com/c/cc63b5326666e8b3d5ec57931e016f96?family=Pixel+Font7);

  @font-face {font-family: "Pixel Font7"; src: url("//db.onlinewebfonts.com/t/cc63b5326666e8b3d5ec57931e016f96.eot"); src: url("//db.onlinewebfonts.com/t/cc63b5326666e8b3d5ec57931e016f96.eot?#iefix") format("embedded-opentype"), url("//db.onlinewebfonts.com/t/cc63b5326666e8b3d5ec57931e016f96.woff2") format("woff2"), url("//db.onlinewebfonts.com/t/cc63b5326666e8b3d5ec57931e016f96.woff") format("woff"), url("//db.onlinewebfonts.com/t/cc63b5326666e8b3d5ec57931e016f96.ttf") format("truetype"), url("//db.onlinewebfonts.com/t/cc63b5326666e8b3d5ec57931e016f96.svg#Pixel Font7") format("svg"); }
  .center {
    position:fixed;
    top:27%;
    left:37%;
  }


  .table {
    width: 100%;
    height: 100%;
    font-size: 90px;
    font-family: 'Pixel Font7', sans-serif;
    text-align: center;

  }
  .td {
    width: 160px;
    height: 160px;

  }

  .title {
    position:fixed;
    top:5%;
    left:40%;
    font-family: 'Pixel Font7', sans-serif;
  }

  .information{
    position:fixed;
    top:92%;
    left:46%;
    font-family: 'Pixel Font7', sans-serif;
  }

  .informationLogo{
    position:fixed;
    top:94%;
    left:54%;
  }
  .font {
    font-family: 'Pixel Font7', sans-serif;
  }
  </style>
  