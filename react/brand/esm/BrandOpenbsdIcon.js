import * as React from "react";
function BrandOpenbsdIcon({
  title,
  titleId,
  ...props
}, svgRef) {
  return /*#__PURE__*/React.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon",
    ref: svgRef,
    "aria-labelledby": titleId
  }, props), title ? /*#__PURE__*/React.createElement("title", {
    id: titleId
  }, title) : null, /*#__PURE__*/React.createElement("path", {
    d: "M10.989 3.964c-.118.274-.085.595-.171.88-.02.065-.085.264-.18.25-.194-.028-.093-.401-.318-.408l.07.545c-.336.042-.29-.484-.427-.697-.158-.247-.196.112-.185.221.006.072.02.142.029.212.015.123.019.23.003.352-.322-.004-.204-.428-.44-.492l.017.51c-.357-.003-.519-.325-.676-.598-.065-.115-.152-.335-.309-.265.074.318.247.621.265.951.004.085-.076.301-.194.261-.274-.092-.237-.588-.465-.718-.046-.026-.119-.003-.169 0 0 .262.116.58.208.826.02.053.075.24-.04.235-.206-.005-.258-.405-.467-.358.026.108.09.195.125.299.022.064.062.128.074.194.026.144-.157.155-.252.128-.224-.067-.385-.25-.545-.41-.045-.044-.162-.2-.236-.13-.082.08.08.218.125.271.137.158.285.344.35.545.029.087.034.21-.052.27-.085.058-.224-.048-.293-.093-.211-.14-.42-.382-.686-.388l-.062.158.169.23.438.492-.51-.211c.02.133.34.295.277.433-.037.081-.222.083-.295.072-.26-.037-.444-.231-.686-.3-.214-.062-.174.105-.053.2a3.944 3.944 0 0 1 .334.3c.107.106.2.22.3.333l-.51-.017v.035l.492.228-.088.352a.934.934 0 0 1-.387-.095c-.088-.038-.18-.102-.281-.095-.12.008-.192.118-.111.22.12.153.362.24.515.36.058.045.144.123.078.201-.132.154-.486-.043-.658.008v.035c.16.094.489.147.583.32.075.135-.135.44-.284.43-.133-.012-.255-.161-.352-.24-.234-.188-.484-.408-.757-.538-.467-.222-.932.131-1.302.362.047.15.234-.01.352.017.158.036.278.183.38.3.49.564.9 1.204 1.083 1.936.048.192.13.423-.014.595-.038.047-.096.053-.139.09-.032.03-.03.07.014.083.08.025.198-.012.277-.031.258-.063.553-.202.67-.455.074-.159.1-.465.28-.528.04.169.23.392.213.563-.017.15-.177.326-.27.438-.033.04-.112.126-.065.183.048.057.146-.065.175-.093.134-.126.426-.325.505-.036.069.252-.152.659-.263.88-.031.061-.173.254-.117.323.064.078.197-.127.225-.165.111-.145.5-.576.706-.421.252.189.165.324.07.58-.027.072-.126.252-.059.32.065.067.15.007.184-.056.06-.115.223-.456.386-.369.102.055.257.147.316.248.092.159.012.476-.013.648-.014.1-.12.41-.032.482.082.066.149-.133.173-.182.087-.172.187-.349.315-.493.047-.052.112-.139.19-.124.41.077-.008.484.16.691.034.042.125.04.175.049l.211-.546c.108.041.266.056.345.145.066.075.08.2.1.295.053.265.082.523.048.792.033.024.086.08.131.051.057-.036.065-.184.084-.245.062-.194.157-.38.245-.563.058-.12.216-.249.33-.083.116.17.07.47.143.664.187-.092.207-.481.211-.669l.242.036.146.299.263.756c.136-.052.093-.313.109-.44.02-.17.06-.514.185-.641.05-.05.15-.055.216-.08.075.182.116.389.206.563.035.068.116.141.197.1.078-.04.075-.132.065-.205-.025-.183-.066-.362-.08-.546.348-.024.553.257.772.493.085.09.158.211.283.246l-.18-.528-.101-.493c.127-.052.394-.311.528-.274.198.057.35.61.597.48.105-.055.051-.15.001-.223-.073-.11-.295-.373-.27-.51.017-.102.188-.221.287-.22.228.004.625.177.757.36l.159-.017c-.024-.315-.496-.46-.564-.775a.236.236 0 0 1 .002-.1c.05-.202.172-.114.298-.06.039.017.124.06.157.012.035-.053-.028-.123-.05-.168-.049-.091-.092-.197-.072-.3.164.043.265.142.405.234.032.022.105.076.146.046.044-.032-.02-.097-.041-.121-.062-.072-.252-.245-.234-.35.013-.071.133-.147.181-.195.161-.161.344-.325.476-.51h.017c.31.361 1.285.108 1.161-.44-.077.01-.15.071-.229.044-.346-.12-.262-.675-.65-.678-.03-.362-.175-.724-.35-1.039-.08-.144-.247-.275-.306-.422-.032-.082-.027-.21-.03-.3.203-.03.103-.237.029-.35-.083-.128-.17-.28-.278-.386-.131-.132-.327-.218-.31-.442.015-.208.374-.181.435-.37-.107.005-.212.032-.317.05-.261.043-.307-.045-.184-.278.106-.204.276-.358.425-.528.049-.054.196-.178.12-.257-.062-.066-.167.034-.22.07a2.482 2.482 0 0 1-.633.292c-.066.02-.262.097-.284-.02-.03-.159.27-.188.23-.367-.12.029-.355.218-.47.13-.14-.105.064-.375.087-.499.022-.126-.08-.13-.15-.052-.026.028-.048.058-.07.087-.042.05-.074.1-.1.158-.288-.168.257-.363.155-.519-.037-.055-.105 0-.137.03-.069.059-.326.355-.382.137-.062-.24.063-.53.128-.756.017-.06.093-.22.019-.262-.108-.062-.155.147-.18.21a1.36 1.36 0 0 1-.36.489c-.05.045-.135.131-.21.11-.109-.03-.11-.332-.106-.424.002-.044.026-.12-.016-.152-.056-.041-.086.042-.093.082-.028.13-.109.5-.3.257-.175-.22.094-.675-.26-.768l-.194.616c-.232-.05-.18-.382-.123-.563l-.105-.035c-.018.072-.04.142-.066.211-.093.263-.218.315-.315.018-.074-.227-.048-.471-.085-.704-.014-.093-.023-.187-.115-.23Zm.017.528c.09.212-.004.478.139.686.145.212.417.098.595.231.063.048.012.15-.005.21-.058.202-.162.352-.27.527.381-.195.51-.752.562-1.143h.018c-.016.347-.005.69 0 1.038.001.157-.022.34.158.369V5.6c.189.055.472.293.676.223.105-.036.2-.162.273-.24.055-.06.102-.124.142-.194h.018l-.07.563-.177-.035.387.276.152.132-.116.171-.51.371c.37-.055.558-.329.827-.545-.088.367-.287.736-.194 1.126h.017l.211-.845c.16.076.216.278.37.37.223.132.536-.12.739-.194-.133.188-.333.32-.37.563l-.158-.07c.138.354.303.694.362 1.074.054.346-.014.69.009 1.038.012.16.078.301.104.457-.328.112-.388.572-.704.721.025-.11.064-.22.064-.334 0-.082-.038-.164-.017-.246.043-.162.183-.297.24-.458.089-.25.03-.487-.005-.739l.176.018-.442-.687-.22-.334.081-.229c-.444.342-1.089.693-1.09 1.338l.157-.053.053.387-.246.035v.035c.206.059.42.087.616.179.142.066.3.154.398.28.326.413.065 1.06-.181 1.442-.125.192-.347.37-.428.58.222-.053.336-.266.462-.44.053-.073.099-.176.19-.21.14-.053.186.206.216.298.037.117.127.319.105.44-.042.235-.242.387-.199.652.097-.118.127-.352.281-.41.1-.036.203.056.3.07a.72.72 0 0 0 .58-.19c.167-.153.28-.4.239-.632-.025-.14-.104-.277-.094-.422.007-.117.087-.211.129-.317.1-.249.088-.532-.15-.693a.502.502 0 0 0-.211-.08c.019-.13.154-.413.309-.245.11.118.169.326.23.473.228.535.23 1.17-.094 1.671-.23.356-.595.648-.903.933l-.123-.352h-.035c-.041.21.107.45.193.634-.192-.044-.376-.242-.58-.212.057.1.436.334.14.44.002.087-.064.146-.116.211-.117.145-.265.361-.447.423l-.334-.88h-.018c.05.386.183.761.356 1.108.09.18.235.357.295.546-.109-.093-.178-.241-.272-.352a3.683 3.683 0 0 0-.555-.52c-.132-.103-.262-.22-.44-.201.201.18.506.277.487.616-.006.096-.112.138-.188.172-.197.09-.39.188-.598.256-.057.018-.163.07-.223.05-.064-.021-.056-.161-.063-.215-.022-.166.07-.6-.1-.668-.075.589.076 1.125.122 1.707h-.018c-.099-.43-.256-.91-.489-1.285-.064-.103-.2-.348-.337-.317l.361.634.008.268-.264.047-.756.02c.027-.219.075-.436.116-.652.008-.047.043-.19-.045-.19-.082 0-.099.238-.11.296a5.066 5.066 0 0 0-.12.968h-.018c0-.533-.239-1.01-.457-1.479-.06.09.024.22.05.317.058.216.066.43.038.651-.357-.069-.744-.162-1.073-.317.087-.208.336-.518.334-.739-.323.325-.469.779-.633 1.197h-.018l.07-.845-.122-.721c-.077.077-.035.233-.024.334.02.16.009.402-.11.525-.065.068-.131.008-.201-.02-.196-.079-.34-.21-.51-.329-.061-.042-.172-.087-.164-.176.019-.252.383-.372.392-.598-.42.18-.62.634-.95.916.108-.458.456-.994.37-1.48-.09.05-.085.173-.108.265a2.52 2.52 0 0 1-.227.563c-.233-.135-.42-.364-.573-.581-.043-.06-.136-.152-.137-.229-.001-.074.084-.16.131-.21.142-.155.315-.272.509-.353-.139-.085-.412.117-.563.159.102-.216.379-.427.299-.687-.23.18-.385.566-.545.81h-.018l-.335-.739.44.158c.014-.157-.21-.217-.334-.246.073-.191.278-.337.229-.563H6.29c-.051.163-.157.443-.335.492l-.052-.28h-.018c-.07.147.017.26-.023.4-.022.073-.127.062-.163.13-.05.092-.054.215-.096.314a.96.96 0 0 1-.527.51l-.022-.315.268-.3-.282.21c-.036-.094-.118-.271-.07-.37.043-.084.148-.14.211-.21l-.282.14c-.095-.246.08-.175.177-.352-.072.041-.19.117-.275.078-.11-.05-.224-.373-.27-.483l.298-.052v-.018c-.141.018-.365.07-.387-.123h.37v-.017l-.416-.047-.113-.147-.246-.317c.147-.043.399-.043.546 0-.215-.225-.598.106-.774-.264l.44-.087v-.018c-.137 0-.391.079-.51.016-.032-.016-.055-.043-.079-.07-.226-.255.28-.278.447-.256.321.044.569.263.792.486.114.112.276.314.44.347.162.032.298-.071.423-.154 0 .124-.013.246.087.335 0-.243.003-.5.04-.74.014-.088.05-.205.154-.221.132-.02.31.18.405.257 0-.137-.102-.252-.186-.352a2.92 2.92 0 0 0-.922-.687v-.017c.48.083.841.364 1.354.228v-.035l-.598-.087c.025-.187.16-.428.118-.617-.058-.256-.331-.375-.435-.598.179.07.368.17.564.174.11.003.196-.058.298-.082.283-.066.447.072.634.26.051-.178-.088-.326-.195-.457-.109-.134-.204-.269-.333-.385-.155-.14-.386-.303-.475-.496.146.03.286.15.405.235.21.149.417.293.65.403.124.058.338.155.44.032l-.562-.212c.04-.059.099-.11.129-.176.08-.179-.061-.331-.112-.492.108.04.202.132.317.152.27.045.428-.275.634-.381l.14.668c.117-.098.065-.288.046-.422-.058-.388-.288-.73-.345-1.109h.018c.222.476.487.99.932 1.284l-.161-.211-.279-.422a.578.578 0 0 0 .157-.083c.308-.247.046-.59.001-.885h.018c.038.09.082.183.137.264.257.373.597.313.99.282l-.106.774h.018c.052-.165.15-.3.185-.475.064-.318-.003-.633-.01-.95h.018c.028.187.104.367.164.546.095.28.171.589.381.809l-.193-.792c.56 0 .711-.377.721-.88Zm-.158 1.214-.282 1.267c.217-.132.263-.614.282-.844h.018c.038.203.056.406.139.598.032.075.068.177.16.176l-.225-.792-.092-.405Zm-1.724.229c.003.45.226.86.14 1.32.085-.052.087-.173.088-.264.003-.213-.035-.422-.035-.634h.018c.061.213.227.636.475.669-.03-.115-.123-.2-.186-.3-.14-.218-.276-.659-.5-.791Zm3.607.194c-.196.306-.43.726-.721.95v.017c.221-.04.461-.32.527-.528h.018c-.003.313-.146.645-.018.95h.018c.093-.316.045-.69.125-1.02.026-.103.119-.276.051-.37Zm-1.162.703c-.104.235-.154.452-.37.616v.035c.155.041.263-.153.3-.281h.017c.015.118.03.364.159.405l-.087-.405-.019-.37Zm-3.766.018c.038.433.62.725.546 1.197.093-.055.069-.157.037-.247-.065-.185-.173-.348-.249-.528.169.154.418.328.652.23l-.37-.154-.616-.498Zm2.429.14c-.053.176-.203.518-.141.687h.035l.123-.422h.018c.043.159.089.4.281.422l-.281-.686h-.035Zm-1.18.44.088.74h.036l-.018-.528c.115.08.27.276.423.211-.059-.064-.145-.075-.212-.13-.109-.088-.166-.28-.316-.292Zm3.872.106c-.186.186-.341.314-.598.387v.036c.152.043.3-.041.422-.123-.02.103-.152.373-.052.44l.168-.511.06-.23Zm.898.364c.08.006.14.108.188.164.14.163.296.336.357.546-.407-.084-.847-.027-1.25.07.09-.237.26-.487.458-.642.067-.054.15-.146.247-.138Zm-3.907.04-.106.547c.088-.068.11-.281.123-.388l.159.176a.62.62 0 0 0-.176-.334Zm1.724.054-.334.334.317-.229.052.317c.062-.09.03-.337-.035-.422Zm-3.695.045a.147.147 0 0 0-.035.008v.017c.148.15.27.356.363.546.05.104.036.219.147.281-.009-.206-.097-.361-.176-.545.125.072.292.18.44.14V8.45a2.221 2.221 0 0 1-.528-.302c-.064-.052-.13-.117-.21-.11Zm-1.214.166c.017.149.138.204.246.286.15.109.285.237.4.383.075.097.12.264.217.334-.021-.259-.174-.563-.423-.669v-.017c.253.049.505.143.756.035v-.035l-.3-.012-.896-.305Zm8.182.052c.173.067.358.305.423.476l-.388-.053-.035-.423Zm-4.258.018-.158.3.175-.194.106.176-.123-.282Zm3.47.415c.035 0 .069.007.101.018.213.084.156.525.111.693-.036.137-.1.289-.233.353a.884.884 0 0 0-.423-.374c-.09-.042-.239-.059-.301-.142-.06-.08-.122-.376-.04-.455.089-.085.332-.068.447-.068.095 0 .229-.03.339-.025Zm-1.78.008-.3.228.264-.14-.035.21c.075-.052.102-.215.07-.298Zm2.568.105c.08.006.216-.001.274.058.194.198.085.73-.15.84l-.07-.405c.018 0 .036 0 .052-.002v.002h.052l-.023-.008c.208-.05.172-.337-.03-.344l-.052-.018.028.019h-.01v-.001h-.035l.006.006a.25.25 0 0 0-.042.012v-.16Zm-.897.07c-.036.038-.088.065-.115.11-.186.318.516.326.318-.018-.023-.04-.063-.064-.097-.091l-.07.035h-.036v-.035Zm-3.695.07c0 .09-.018.182.07.23v-.176l.211.07-.281-.123Zm-.978.051-.078.003c.03.113.08.21.176.281l-.106-.229.212.018c-.041-.074-.124-.076-.204-.073Zm2.15.006c-.053.006-.098.098-.099.19l.087-.158.107.07c-.03-.077-.064-.105-.095-.102Zm-2.827.05-.299.052.247.3-.14-.247.21-.035-.018-.07Zm-1.548.244c-.18.008-.385.213-.528.3v.036l.51.176c-.01-.134-.183-.173-.299-.193l.352-.317a.234.234 0 0 0-.035-.002Zm.933.037-.722.194v.035l.387.139.23.16c-.026-.187-.224-.219-.353-.317.163-.03.385-.033.458-.21Zm1.812.194c-.075.012-.134.07-.053.122l.053-.122Zm.58.105-.017.124c.055-.033.064-.062.053-.124h-.035Zm.792 0c-.068.02-.124.069-.052.124l.052-.124Zm.652.176-.176.053v.07l.176-.123Zm.668.018v.21c.066-.063.066-.145 0-.21Zm2.492.104c.248.002.494.23.438.494-.036.17-.141.353-.308.419-.087.035-.284.023-.29-.102-.006-.117.226-.279.273-.405-.326.249-.526.46-.968.405v-.018c.26-.193.37-.522.617-.714a.376.376 0 0 1 .239-.08Zm-5.8.019c-.085.044-.137.137-.158.229l.21.052-.116-.112.064-.17Zm-2.674.035-.67.352c.024.131.153.06.247.054.135-.008.384.035.458.158l.123-.018c-.032-.2-.319-.2-.475-.212.115-.116.28-.15.317-.334Zm3.396.14-.194.248.246.087-.176-.105c.037-.077.181-.144.124-.23Zm-1.531.053-.212.194c.083.028.273.136.335.053l-.229-.088.106-.159Zm4.557 0 .246.194v.036l-.228.123a.546.546 0 0 0 .316-.123.513.513 0 0 0-.334-.23Zm-5.648.07c-.107.24-.27.434-.458.617-.107.104-.274.202-.316.352l.774-.164.405-.082c-.242-.173-.665.02-.898.123.16-.321.474-.449.545-.828l-.017-.017h-.035Zm3.325.018c-.075.026-.085.087-.105.159l.105.018v-.177Zm.722.124.018.194a.294.294 0 0 0 .158-.194l-.124.088-.052-.088Zm-2.446.246c-.076.022-.117.077-.035.123l.035-.123Zm3.115.106-.018.246-.158-.105c.016.106.09.157.194.175l.017-.316h-.035Zm-3.942.017c-.128.04-.348.404-.405.528.117-.004.522.01.581-.07l-.387-.053.21-.405Zm2.158.035c-.097.006-.19.061-.293.061-.295 0-.781-.147-1.035.054-.231.183-.245.428-.39.66-.07.113-.196.19-.299.271-.038.03-.107.074-.093.133.018.07.14.109.199.136.133.06.278.109.422.138.076.016.191.013.257.06.119.087.078.381.095.511.132-.075.305-.303.369-.44-.14.043-.202.18-.3.282l-.052-.37c.411-.036.592-.485.834-.755.148-.165.333-.237.521-.336-.11-.132-.265.008-.37.088-.279.215-.44.476-.686.722l.141-.37h-.017c-.077.184-.168.38-.352.475l.07-.246H9.28c-.074.177-.157.264-.351.264l.175-.405h-.017l-.229.387-.07-.017.176-.334h-.018c-.089.142-.183.344-.37.298l.158-.298c-.087.069-.126.233-.23.274-.047.02-.137-.015-.117-.078.024-.082.158-.162.211-.232.181-.236.327-.622.594-.768.22-.12.553.032.792.03.138-.003.294-.05.335-.195a.246.246 0 0 0-.042 0Zm-4.428.053-.017.106.07-.106H5.85Zm8.677.017c.133.003.28.022.356.125.078.105.06.25.1.369.03-.126.026-.598.278-.333.203.214.149.678-.051.877-.126.124-.429.2-.579.084-.23-.177-.288-.54-.354-.804-.016-.064-.09-.21-.05-.27.034-.05.122-.046.175-.047h.125Zm1.546.106c.332.06.359.53.652.67v.035c-.167.083-.222-.002-.335-.123l.124.228c-.136-.02-.165-.153-.247-.247l.123.265c-.202 0-.288-.034-.37-.229h-.017l.035.158-.125-.089.067-.227.093-.44Zm-2.762.018c-.072.021-.11.061-.053.124l.053-.124Zm-2.428.141.193.211.088-.21-.088.14-.193-.14Zm1.777 0-.018.264-.176-.105c-.01.115.168.247.265.299l-.035-.458h-.036Zm-4.769.299c-.055.263-.243.5-.412.704-.08.097-.204.194-.24.317.292-.084.62-.38.934-.352-.08-.156-.457.06-.599.087.115-.169.27-.316.345-.51.03-.081.05-.19-.028-.246Zm4.082.159c-.134.02-.127.154-.158.263-.074-.074-.15-.177-.263-.158l.334.405.087-.51Zm-1.636.017-.176.159-.018-.088h-.052l.018.228c.102-.017.208-.202.228-.299Zm.476.282-.088.228h-.018l-.141-.193.123.405h.017c.047-.118.213-.334.107-.44Zm1.953.105-.053.018.105.58c-.112-.098-.458-.55-.598-.386.324.103.459.48.74.65l-.088-.334-.106-.528Zm.88.14c-.09.22.128.453.21.652-.228-.118-.431-.314-.704-.317v.07c.392.035.601.436.916.617-.003-.329-.285-.706-.388-1.021h-.035Zm-3.573.265-.123.018c.042.098.115.178.15.28.037.115.013.273.132.335.055-.124.19-.325.158-.457-.1.05-.147.156-.158.264h-.018l-.14-.44Zm-1.636.018c0 .345-.047.67-.141 1.003.123.004.187-.123.253-.212.13-.174.262-.366.469-.457v-.018c-.21-.027-.471.286-.546.458h-.017c.062-.24.116-.54.017-.774h-.035Zm3.097.017c-.142.054-.106.245-.106.37l-.404-.282c.022.072.08.094.133.143.105.098.196.325.342.35l.035-.58Zm.897.334c-.124.22.057.674.088.916H12.5c-.098-.207-.287-.379-.44-.546-.021-.023-.133-.175-.172-.112-.042.067.162.225.2.27.14.167.268.356.374.546.062.11.115.256.232.316-.088-.453-.228-.925-.229-1.39h-.035Zm-5.86.177c.13.038.205.127.212.263l-.405.282.194-.545Zm2.921.14-.017.018c.086.236.17.433.212.686.02.118.008.272.105.352.099-.188.134-.405.224-.598.053-.111.137-.208.11-.335-.17.084-.269.46-.317.634-.087-.233-.06-.638-.317-.757Zm1.197.176c.199.395.346.767.458 1.196.123-.069.107-.192.105-.316-.003-.29.108-.578.088-.862-.083.028-.098.113-.112.194-.035.191-.035.39-.082.58-.095-.222-.17-.746-.457-.792Zm3.713.14.264.388-.387-.176.123-.212Zm-6.352.793c.377.033.12.38-.035.545l.035-.545Zm4.84.422.158.493a1.116 1.116 0 0 1-.352-.387l.193-.106Zm-3.21.266.2.034-.158.563h-.018l-.035-.44.01-.157Zm1.662.101c.036 0 .07.008.099.031.095.08-.04.47-.082.57l-.194-.563c.05-.013.117-.037.177-.038Z"
  }));
}
const ForwardRef = /*#__PURE__*/ React.forwardRef(BrandOpenbsdIcon);
export default ForwardRef;