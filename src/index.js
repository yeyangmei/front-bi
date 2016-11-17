/**
 * Created by yeyangmei on 16/11/11.
 */
import assign from 'object-assign';
import $ from 'jquery';
import createDom from './dom';
import styles from './style.css';


const defaultOptions = {
  //width: 220,
};

function getClassName(ctx, width) {
  return  ctx.width() === width ? styles.sup_li_hover : styles.sup_li_small_hover;
}

function addArrowClassName(opt, $this) {
  return opt > 0 ?  $this.next(`.${styles.arrow}`).addClass(styles.arrow_blue)
    :
    $this.find(`.${styles.arrow}`).addClass(styles.arrow_blue);
}

function removeArrowClassName(opt, $this) {
  return opt > 0 ?  $this.next(`.${styles.arrow}`).removeClass(styles.arrow_blue)
    :
    $this.find(`.${styles.arrow}`).removeClass(styles.arrow_blue);
}


$.fn.biNav = function (data, selector, userOption = {}) {
  const option = assign({}, defaultOptions, userOption);
  const $this = $(this);
  const element = createDom(data);

  // console.log(element);

  $this.append(element);

  $(`.${styles.sup_li}`)
    .hover(function enter() {
      console.log(this);
      const $this1 = $(this);
      console.log(this.getBoundingClientRect());
      const position = this.getBoundingClientRect();
      const height = option.bodyHeight - position.bottom;

      if(position.top > height) {
         $(this).find(`.${styles.sub}`).css('bottom','0');
      }else{
        $(this).find(`.${styles.sub}`).css('top','0');
      }
      $this1.addClass(getClassName($this1, option.width));
    }, function leave() {
      const $this1 = $(this);
      $this1.removeClass(getClassName($this1, option.width));
    }
    );

  $(`.${styles.sub_li}`)
    .click(function(e) {
      const $this = $(this);
      $this.siblings().find('ul').slideUp();
      $this.parent().find(`.${styles.arrow}`).removeClass(styles.arrow_blue);
      if($this.find('ul').css('display') == 'block') {
        removeArrowClassName($this.next(`.${styles.arrow}`).length, $this);
        $this.find('ul').slideUp();

      }else{
        addArrowClassName($this.next(`.${styles.arrow}`).length, $this);
        $this.find('ul').slideDown();
      }
    });

  $(selector).click(function() {
    $(`.${styles.sup}`).toggleClass(styles.sup_small);
  })
};