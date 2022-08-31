<template>
	<div class="popup">
		<div class="popup-inner">
			<slot></slot>
			<button class="popup-close" @click="TogglePopup();">
				Play Again.
			</button>
		</div>
	</div>
</template>

<script>
export default {
	props: ['TogglePopup']
}
</script>

<style lang="scss">
@import url(//db.onlinewebfonts.com/c/cc63b5326666e8b3d5ec57931e016f96?family=Pixel+Font7);

@font-face {font-family: "Pixel Font7"; src: url("//db.onlinewebfonts.com/t/cc63b5326666e8b3d5ec57931e016f96.eot"); src: url("//db.onlinewebfonts.com/t/cc63b5326666e8b3d5ec57931e016f96.eot?#iefix") format("embedded-opentype"), url("//db.onlinewebfonts.com/t/cc63b5326666e8b3d5ec57931e016f96.woff2") format("woff2"), url("//db.onlinewebfonts.com/t/cc63b5326666e8b3d5ec57931e016f96.woff") format("woff"), url("//db.onlinewebfonts.com/t/cc63b5326666e8b3d5ec57931e016f96.ttf") format("truetype"), url("//db.onlinewebfonts.com/t/cc63b5326666e8b3d5ec57931e016f96.svg#Pixel Font7") format("svg"); }

.popup {
	position: fixed;
	top: 0;
	left: 0;
	right: 0;
	bottom: 0;
	z-index: 99;
	background-color: rgb(0, 0, 0, 0.5);
	
	display: flex;
	align-items: center;
	justify-content: center;

	.popup-inner {
		background: grey;
		padding: 132px;
	}
    
}

.popup-close {
    font-family: "Pixel Font7";
    position:fixed;
    top:60%;
    left:47%;
    padding: 8px;
    font-size: 1.2rem;
    font-weight: bold;
    color: #fff;
    background-color: #456959;
    border-radius: 2px;
    cursor: pointer;
    transition: all 0.3s ease;
}

</style>