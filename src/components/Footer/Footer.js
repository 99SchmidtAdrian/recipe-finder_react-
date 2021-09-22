import phone from '../../images/phone.svg';
import facebook from '../../images/facebook-logo.svg';
import email from '../../images/e-mail.svg';

const Footer = () => {
    return <footer class="bg-gray-900 text-sm mt-20">
    <div class="felx flex-col text-gray-200 font-light text-center">
        <div class="flex flex-col my-auto py-5">
            <div class="flex flex-row mx-auto"><a href="https://www.facebook.com/adrian.schmidt.142687/"
                    target="_blank"><img src={facebook} alt="facebook link" class="w-3 mt-1 mr-1" /></a><a
                    href="https://www.facebook.com/adrian.schmidt.142687/" target="_blank">Adrian Schmidt</a></div>
            <div class="flex flex-row mx-auto"><a href="tel:+36305762059"><img src={phone} alt="phone"
                        class="w-3 mt-1 mr-1" /></a><a href="tel:+36305762059">+36305762059</a></div>
            <div class="flex flex-row mx-auto"><a href="99schmidt.adrian@gmail.com"><img src={email} alt="e-mail"
                        class="w-3 mt-1 mr-1" /></a><a href="mailto:99schmidt.adrian@gmail.com">99schmidt.adrian@gmail.com</a></div>
        </div>
    </div>
</footer>
}

export default Footer