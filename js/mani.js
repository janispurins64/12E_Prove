var oText = document.getElementById("ID_ANIMATE");
var oContainer = document.getElementById("ID_ANIMATION");

var nWidth = oText.offsetWidth
var nPos = oContainer.offsetWidth;


function OnTimer()
{
	oText.style.left = nPos.toString() + "px";

	if(--nPos < -nWidth)
		nPos = oContainer.offsetWidth;
}
OnTimer();

window.setInterval(OnTimer, 10);