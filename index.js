window.onscroll = setHeaderStyle;
window.onresize = setHeaderStyle;

function sideBarExpand() {
  if (document.getElementById("sideBarToggle").checked) {
    if (window.matchMedia("(max-width: 460px)").matches) {
      document.getElementById("sideBar").style.width = "192px";
      document.getElementById("sideBarHeader").style.display = "inherit";
      document.getElementById("sideBarHeaderLogo").style.display = "block";
      document.getElementById("sideBarHeaderImg").style.display = "block";
      document.getElementById("sideBarCategoryLabelCatalog").style.display =
        "block";
      document.getElementById("sideBarCategoryLabelHealth").style.display =
        "block";
      document.getElementById("sideBarCategoryLabelBeauty").style.display =
        "block";
      document.getElementById("sideBarCategoryLabelLeisure").style.display =
        "block";
      document.getElementById("sideBarCategoryLabelAuto").style.display =
        "block";
    } else {
      document.getElementById("sideBar").style.width = "240px";
      document.getElementById("sideBarHeaderLogo").style.display = "block";
      document.getElementById("sideBarCategoryLabelCatalog").style.display =
        "block";
      document.getElementById("sideBarCategoryLabelHealth").style.display =
        "block";
      document.getElementById("sideBarCategoryLabelBeauty").style.display =
        "block";
      document.getElementById("sideBarCategoryLabelLeisure").style.display =
        "block";
      document.getElementById("sideBarCategoryLabelAuto").style.display =
        "block";
    }
  } else {
    document.getElementById("sideBarHeader").style.display = null;
    document.getElementById("sideBar").style = null;
    document.getElementById("sideBarHeaderImg").style = null;
    document.getElementById("sideBarHeaderLogo").style = null;
    document.getElementById("sideBarCategoryLabelCatalog").style = null;
    document.getElementById("sideBarCategoryLabelHealth").style = null;
    document.getElementById("sideBarCategoryLabelBeauty").style = null;
    document.getElementById("sideBarCategoryLabelLeisure").style = null;
    document.getElementById("sideBarCategoryLabelAuto").style = null;
  }
}

function setHeaderStyle() {
  let isScroll =
    document.body.scrollTop > 50 || document.documentElement.scrollTop > 50;

  if (window.matchMedia("(max-width: 460px)").matches) {
    if (isScroll) {
      document.getElementById("categoryName").style.display = "none";
      document.getElementById("sideContainerHeader").style.paddingLeft = "68px";
      document.getElementById("sideContainerHeader").style.paddingBottom =
        "27px";
      document.getElementById("sideContainerHeader").style.paddingRight =
        "21px";
      document.getElementById(
        "sideContainerInputSearchIcon"
      ).style.backgroundImage = "none";
      document.getElementById("sideContainerInputSearchIcon").style.padding =
        "12px 16px";
    } else {
      document.getElementById("categoryName").style.display = "block";
      document.getElementById("categoryName").style.textAlign = "right";
      document.getElementById("sideContainerHeader").style.paddingTop = "26px";
      document.getElementById("sideContainerHeader").style.paddingRight =
        "21px";
      document.getElementById("sideContainerHeader").style.paddingBottom =
        "27px";
      document.getElementById("sideContainerHeader").style.paddingLeft = "20px";
      document.getElementById(
        "sideContainerInputSearchIcon"
      ).style.backgroundImage = null;
      document.getElementById(
        "sideContainerInputSearchIcon"
      ).style.padding = null;
    }
  } else if (window.matchMedia("(max-width: 768px)").matches) {
    if (isScroll) {
      document.getElementById("categoryName").style.display = "none";
      document.getElementById("sideContainerHeader").style.paddingLeft = "77px";
      document.getElementById("sideContainerHeader").style.paddingBottom =
        "27px";
      document.getElementById("sideContainerHeader").style.paddingRight =
        "27px";
    } else {
      document.getElementById("categoryName").style.display = "block";
      document.getElementById("categoryName").style.textAlign = "right";
      document.getElementById("sideContainerHeader").style.paddingLeft = "26px";
      document.getElementById("sideContainerHeader").style.paddingBottom =
        "27px";
      document.getElementById("sideContainerHeader").style.paddingRight =
        "27px";
    }
  } else {
    if (isScroll) {
      document.getElementById("categoryName").style.display = "none";
      document.getElementById("sideContainerHeader").style.paddingLeft = "60px";
      document.getElementById("sideContainerHeader").style.paddingBottom =
        "40px";
      document.getElementById("sideContainerHeader").style.paddingRight =
        "60px";
    } else {
      document.getElementById("categoryName").style.display = "block";
      document.getElementById("categoryName").style.textAlign = "left";
      document.getElementById("sideContainerHeader").style.paddingLeft = "60px";
      document.getElementById("sideContainerHeader").style.paddingBottom =
        "40px";
      document.getElementById("sideContainerHeader").style.paddingRight =
        "60px";
    }
  }
}
