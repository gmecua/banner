<script>

function addBanner(bannerElement) {
        if (document.getElementsByTagName('body').length > 0) {
            if(document.querySelector("#=banner")){
                console.log("Banner-Inject: Attempting to remove existing banner");
                var existingBannerElement = document.querySelector("#banner");
                existingBannerElement.parentNode.removeChild(existingBannerElement);
            }
            console.log("Banner-Inject: Adding new banner");
            document.getElementsByTagName('body')[0].appendChild(bannerElement);
            document.getElementsByTagName('body')[0].className += " has-banner";
        } else {
            setTimeout(function() { addBanner(bannerElement); }, 100);
        }
    }
		
var banner = document.createElement("DIV");
banner.className = "banner ms-dialog";
banner.setAttribute('id', 'banner');
banner.innerHTML = "My First JavaScript";
addBanner(banner);
</script>