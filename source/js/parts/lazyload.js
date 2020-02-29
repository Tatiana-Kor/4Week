export default function lazyLoad() {

    $('.js-lazy').each((index, el) => {
        const $image = $(el);
        const realSrc = $image.attr('data-srcset');
    
        $image.attr('srcset', realSrc);
      });
    
}