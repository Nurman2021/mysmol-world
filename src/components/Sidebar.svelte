<script>
    import logo from '$lib/images/Avatar.png';
    import '$lib/simple-line-icon/css/simple-line-icons.css'
</script>
<div class="smol-sidebar-frame01">
    <div class="smol-sidebar-frame02">
      <img
        src={logo}
        alt="rectangle"
        width="44"
        height="44"
        class="smol-sidebar-rectangle1"
      />
    </div>
    <div class="smol-sidebar-frame03">
      <div class="smol-sidebar-text5">
        <p class="smol-sidebar-text6">Main</p>
      </div>
      <div class="smol-sidebar-frame04">
        <span
          width="20"
          height="20"
          class="smol-sidebar-frame05 icon-home"
        ></span>
      </div>
      <div class="smol-sidebar-frame06">
        <span
          width="20"
          height="20"
          class="smol-sidebar-frame07 icon-user"
        ></span>
      </div>
      <div class="smol-sidebar-frame08">
        <span
          width="20"
          height="20"
          class="smol-sidebar-component icon-bulb"
        ></span>
      </div>
      <div class="smol-sidebar-frame09">
        <span
          width="20"
          height="20"
          class="smol-sidebar-frame10 icon-graduation"
        ></span>
      </div>
      <div class="smol-sidebar-frame11">
        <span
          width="20"
          height="20"
          class="smol-sidebar-frame12 icon-grid"
        ></span>
      </div>
      <div class="smol-sidebar-frame13">
        <span
          width="20"
          height="20"
          class="smol-sidebar-frame14 icon-phone"
        />
      </div>
    </div>
    <div class="smol-sidebar-frame15">
      <div class="smol-sidebar-frame16">
        <span
          width="20"
          height="20"
          class="smol-sidebar-frame17 icon-social-facebook"
        />
      </div>
      <div class="smol-sidebar-frame18">
        <span
          width="20"
          height="20"
          class="smol-sidebar-frame19 icon-social-instagram"
        />
      </div>
    </div>
    <div class="smol-sidebar-frame20">
      <span
        width="16"
        height="16"
        class="smol-sidebar-frame21 icon-arrow-right"
      />
    </div>
  </div>
  <style>
.smol-sidebar-frame01 {
color: #ffffff;
  gap: 24px;
  width: 100%;
  display: flex;
  padding: 24px;
  position: fixed;
  max-width: 92px;
  box-sizing: border-box;
  align-items: flex-start;
  border-radius: 12px 12px 12px 12px;
  flex-direction: column;
  justify-content: flex-start;
  background-color: #000;
  opacity: 66%;
  top: 20vh;
  filter: blur(25.8);
}

.smol-sidebar-frame02 {
  width: 100%;
  max-width: 44px;
  box-sizing: border-box;
}

.smol-sidebar-rectangle1{
  width: 100%;
  height: auto;
  margin: 0;
  display: block;
  max-width: 44px;
  border-radius: 36px 36px 36px 36px;
}


.smol-sidebar-frame03 {
  gap: 8px;
  width: 100%;
  display: flex;
  position: relative;
  max-width: 44px;
  box-sizing: border-box;
  align-items: center;
  flex-direction: column;
  justify-content: center;
}

.smol-sidebar-text5 {
  width: 100%;
  max-width: auto;
  margin-top: 0;
  min-height: auto;
  text-align: left;
  margin-bottom: 0;
}

.smol-sidebar-text6 {
  font-size: 10px;
  font-style: normal;
  margin-top: 0;
  text-align: left;
  font-weight: 500;
  line-height: 12px;
  margin-bottom: 0;
  letter-spacing: .4000000059604645px;
  text-transform: uppercase;
}

.smol-sidebar-frame04 {
  gap: 12px;
  width: 100%;
  display: flex;
  padding: 10px 12px;
  position: relative;
  max-width: 44px;
  box-sizing: border-box;
  align-items: center;
  border-radius: 8px 8px 8px 8px;
  justify-content: flex-start;
  background-color: #2d2f39;
}

.smol-sidebar-frame05 {
  width: 100%;
  overflow: hidden;
  max-width: 20px;
  box-sizing: border-box;
}

.smol-sidebar-frame06 {
  gap: 10px;
  width: 100%;
  display: flex;
  padding: 10px 12px;
  position: relative;
  max-width: 44px;
  box-sizing: border-box;
  align-items: center;
  border-radius: 8px 8px 8px 8px;
  justify-content: flex-start;
}

.smol-sidebar-frame07 {
  width: 100%;
  overflow: hidden;
  max-width: 20px;
  box-sizing: border-box;
}

.smol-sidebar-frame08 {
  gap: 12px;
  display: flex;
  padding: 10px 12px;
  position: relative;
  max-width: 44px;
  align-items: center;
  border-radius: 8px 8px 8px 8px;
}

.smol-sidebar-component,
.smol-sidebar-frame08,
.smol-sidebar-frame09 {
  width: 100%;
  box-sizing: border-box;
  justify-content: flex-start;
}

.smol-sidebar-component {
  max-width: 20px;
  align-items: flex-start;
  flex-direction: column;
}

.smol-sidebar-frame09 {
  gap: 12px;
  display: flex;
  padding: 10px 12px;
  position: relative;
  max-width: 44px;
  align-items: center;
  border-radius: 8px 8px 8px 8px;
}

.smol-sidebar-frame10 {
  width: 100%;
  overflow: hidden;
  max-width: 20px;
  box-sizing: border-box;
}

.smol-sidebar-frame11 {
  gap: 12px;
  width: 100%;
  display: flex;
  padding: 10px 12px;
  position: relative;
  max-width: 44px;
  box-sizing: border-box;
  align-items: center;
  border-radius: 8px 8px 8px 8px;
  justify-content: flex-start;
}

.smol-sidebar-frame12 {
  width: 100%;
  overflow: hidden;
  max-width: 20px;
  box-sizing: border-box;
}

.smol-sidebar-frame13 {
  gap: 12px;
  width: 100%;
  display: flex;
  padding: 10px 12px;
  position: relative;
  max-width: 44px;
  box-sizing: border-box;
  align-items: center;
  border-radius: 8px 8px 8px 8px;
  justify-content: flex-start;
}

.smol-sidebar-frame14 {
  width: 100%;
  overflow: hidden;
  max-width: 20px;
  box-sizing: border-box;
}


.smol-sidebar-frame15,
.smol-sidebar-frame16 {
  width: 100%;
  display: flex;
  position: relative;
  max-width: 44px;
  box-sizing: border-box;
  justify-content: flex-start;
}

.smol-sidebar-frame15 {
  gap: 8px;
  align-items: flex-start;
  flex-direction: column;
}

.smol-sidebar-frame16 {
  gap: 12px;
  padding: 10px 12px;
  align-items: center;
  border-radius: 8px 8px 8px 8px;
}

.smol-sidebar-frame17 {
  width: 100%;
  overflow: hidden;
  max-width: 20px;
  box-sizing: border-box;
}

.smol-sidebar-frame18 {
  gap: 12px;
  width: 100%;
  display: flex;
  padding: 10px 12px;
  position: relative;
  max-width: 44px;
  box-sizing: border-box;
  align-items: center;
  border-radius: 8px 8px 8px 8px;
  justify-content: flex-start;
}

.smol-sidebar-frame19 {
  width: 100%;
  overflow: hidden;
  max-width: 20px;
  box-sizing: border-box;
}

.smol-sidebar-frame20,
.smol-sidebar-frame21 {
  width: 100%;
  box-sizing: border-box;
  align-items: flex-start;
  justify-content: flex-start;
  color: white;
}

.smol-sidebar-frame20 {
  gap: 8px;
  display: flex;
  padding: 6px;
  position: absolute;
  max-width: 28px;
  border-top: 1px solid #2d2f39;
  border-left: 1px solid #2d2f39;
  border-right: 1px solid #2d2f39;
  border-bottom: 1px solid #2d2f39;
  border-radius: 8px 8px 8px 8px;
  background-color: #161a23;
}

.smol-sidebar-frame21 {
  overflow: hidden;
  max-width: 16px;
  transform: rotate(-90deg);
  flex-direction: column;
}
  </style>