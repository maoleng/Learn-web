$(document).ready(function() {
	$("#box-select-5").click(function(event) {
		$(this).css("background-color", "#26C2AD")
		$(this).css("color", "#005B58")
		$("#input-people").change(function(event) {
			var input_bill = $("#input-bill").val()
			var input_people = $(this).val()
			var result_total = $("#resul-total")
			var resul_tip = $("#result-tip")
			var select_5 = $("#select-5").text()
			$(".button__reset").css("background-color", "#9FE8DF")
			$(".button__reset").css("color", "#00474B")

			resul_tip.text((input_bill*0.05/input_people).toFixed(2))
			result_total.text((input_bill*1.05/input_people).toFixed(2))
		})
	})
	
	$("#box-select-10").click(function(event) {
		$(this).css("background-color", "#26C2AD")
		$(this).css("color", "#005B58")
		$("#input-people").change(function(event) {
			var input_bill = $("#input-bill").val()
			var input_people = $(this).val()
			var result_total = $("#resul-total")
			var resul_tip = $("#result-tip")
			var select_10 = $("#select-10").text()
			$(".button__reset").css("background-color", "#9FE8DF")
			$(".button__reset").css("color", "#00474B")
			resul_tip.text((input_bill*0.1/input_people).toFixed(2))
			result_total.text((input_bill*1.1/input_people).toFixed(2))
		})
	})

	$("#box-select-15").click(function(event) {
		$(this).css("background-color", "#26C2AD")
		$(this).css("color", "#005B58")
		$("#input-people").change(function(event) {
			var input_bill = $("#input-bill").val()
			var input_people = $(this).val()
			var result_total = $("#resul-total")
			var resul_tip = $("#result-tip")
			var select_10 = $("#select-15").text()
			$(".button__reset").css("background-color", "#9FE8DF")
			$(".button__reset").css("color", "#00474B")
			resul_tip.text((input_bill*0.15/input_people).toFixed(2))
			result_total.text((input_bill*1.15/input_people).toFixed(2))
		})
	})

	$("#box-select-25").click(function(event) {
		$(this).css("background-color", "#26C2AD")
		$(this).css("color", "#005B58")
		$("#input-people").change(function(event) {
			var input_bill = $("#input-bill").val()
			var input_people = $(this).val()
			var result_total = $("#resul-total")
			var resul_tip = $("#result-tip")
			var select_10 = $("#select-25").text()
			$(".button__reset").css("background-color", "#9FE8DF")
			$(".button__reset").css("color", "#00474B")
			resul_tip.text((input_bill*0.25/input_people).toFixed(2))
			result_total.text((input_bill*1.25/input_people).toFixed(2))
		})
	})

	$("#box-select-60").click(function(event) {
		$(this).css("background-color", "#26C2AD")
		$(this).css("color", "#005B58")
		$("#input-people").change(function(event) {
			var input_bill = $("#input-bill").val()
			var input_people = $(this).val()
			var result_total = $("#resul-total")
			var resul_tip = $("#result-tip")
			var select_10 = $("#select-60").text()
			$(".button__reset").css("background-color", "#9FE8DF")
			$(".button__reset").css("color", "#00474B")
			resul_tip.text((input_bill*0.6/input_people).toFixed(2))
			result_total.text((input_bill*1.6/input_people).toFixed(2))
		})
	})

	$(".button__reset").click(function(event) {
		$("#input-bill").val('')
		$("#input-people").val('')
		$("#resul-total").text('0.00')
		$("#result-tip").text('0.00')

		$(".input__select").css("background-color", "#00474B")
		$(".input__select").css("color", "white")
	})

})