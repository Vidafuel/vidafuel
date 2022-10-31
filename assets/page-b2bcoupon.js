function topFormAlign() {
	if (window.innerWidth < 1200) {
		$("#formBlock").hide();
		$("body").css("overflow-y", "auto");
		$("#formBlock").css({ left: 0 });
		return false;
	}
	var left = $(".leftBlock").offset().left;
	var widt = $(".leftBlock").width();
	var frmw = $("#formBlock").width();
	var formLeft = left + widt + frmw;
	$("#formBlock").css({ left: formLeft }).show();
}

/* */
$(document).ready(function () {
	/* ALIGN FORM */
	topFormAlign();
	/* INIT SLIDER */
	new Splide("#splideTests", {
		type: "loop",
		arrows: false,
		autoplay: true,
		interval: 5000,
	}).mount();
	// - - -
	new Splide("#splideQuick", {
		type: "loop",
		perPage: 2,
		arrows: false,
		autoplay: true,
	}).mount();
	/* SHOW FORM */
	$("#getForm").click(function () {
		$("#formBlock").show();
		$("body").css("overflow-y", "hidden");
		$("#formBlock").css({ left: 0 });
		$("#formBlock").css("overflow-y", "auto");
	});

	$(".formClose").click(function () {
		$("#formBlock").hide();
		$("body").css("overflow-y", "auto");
	});

	/* FORM SUBMIT */
	$("#submitForm").click(function (e) {
		e.preventDefault();
		$("#form1").removeClass("hasError");
		$("#formErrors").hide();
		if ($("#form1")[0].checkValidity()) {
			window.location.href = "thankyou.html";
		} else {
			$("#form1").addClass("hasError");
			$("#formErrors").show();
		}
	});
	$("#submitFormCoupon").click(function (e) {
		e.preventDefault();
		$("#form2").removeClass("hasError");
		$("#formErrors").hide();
		if ($("#form2")[0].checkValidity()) {
			window.location.href = "thankyouCoupon.html";
		} else {
			$("#form2").addClass("hasError");
			$("#formErrors").show();
		}
	});
});

$(window).resize(function () {
	topFormAlign();
});
