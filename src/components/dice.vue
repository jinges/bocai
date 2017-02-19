<template>
	<article class="dice">
		<span v-for="item in dice" class="dice_list active"
		:class="item"></span>
	</article>
</template>
<script>
	export default{
		data(){
			return{
				dice:["d1","d2","d3","d4","d5","d6","d7"]
			}
		}
	}
</script>