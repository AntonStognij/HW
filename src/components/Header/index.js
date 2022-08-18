import './style.scss'
import info from '../../info.js'
import { createElem, createUl } from "helper/helper.js";

const Heder = () => {
    let root = document.getElementById('root')
    let blockHeder = createElem ('header', root, null, null, "heder")
    let blockHederElem = document.querySelector('.heder')
    let blockInHeder = createElem ('div', blockHederElem, null, null, "blockHeder")
    let blockInHederBotton = createElem ('div', blockHederElem, null, null, "blockHederBotton")
    let blockInHederElem = document.querySelector('.blockHeder')
    let blockInHederBottonElem = document.querySelector('.blockHederBotton');
 blockInHederBottonElem.innerHTML = `
 <div class="blockHederBottonLeftElem">
    <button class="buttonCatalog">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M3 12H21" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M3 6H17" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M3 18H12" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
        <span class = 'testBtn'> Каталог
        </span>
    </button>
</div>
<div class="blockHederBottonRightElem">
</div>`
    
blockInHederElem.innerHTML = `
<div class="blockHeder">
    <div class="wrapLogo">
        <div class="divLogo">
            <svg width="184" height="30" viewBox="0 0 184 30" fill="none" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
            <rect x="37" y="6" width="147" height="22" fill="url(#pattern0)"></rect>
            <rect width="30" height="30" fill="url(#pattern1)"></rect><defs><pattern id="pattern0" patternContentUnits="objectBoundingBox" width="1" height="1"><use xlink:href="#image0_68_415" transform="translate(-0.285714 -0.479545) scale(0.00442177 0.0295455)"></use></pattern><pattern id="pattern1" patternContentUnits="objectBoundingBox" width="1" height="1"><use xlink:href="#image0_68_415" transform="translate(-0.233333 -0.218333) scale(0.0216667)"></use></pattern> <image id="image0_68_415" width="300" height="94" xlink:href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAASwAAABeCAYAAACZ4CkLAAAVkklEQVR4Ae1dbXLbOBLVEeYIe4TUyPt7Ms7+H//cir2VuUHmBs4Nkhsk/yLJqXJuEN8guUFyA+cG3noNNtlsNEhQlCLJfqxSkQKBRuOBeGw0PrhY8CACRIAIEAEiQASIABEgAkSACBABIkAEiAARIAJEgAgQASJABIgAESACRIAIEAEiQASIABEgAkSACBABIkAEiAARIAJEgAgQASLwdBH4+/a3xcvVX4ur9fXian27uFp9kd/l6nt7LeHra4mH+DyIABEgAr8MAZDO5frV4nL9dXG1ftjidyvpSV6/rMqYERF4egiAYJIldb8FSUXEBjnXCxLX03uWWGIisFcErlavF1frXRGVJy/Ivdir/hROBIjAE0BArCr4pbbq+nliGvt/S2vrCTxTLCIR2AsCLzfP9mhVxeQFvxjy5UEEiAARqEbgEGTVWXH3JK3qmmJEIvDEEZhDVpfrn4uXm78XVx+fLy5X/yzwvyOi2KqK7++NtJ7fPvvXi83y9Yubsy/4nd8s77vrs2vc3+UT8J+bs+cvbs4e7A9hu8zjaGVdre+66S3NlBed+tKeMR0G02JWrxf//bhT7I8WFyq2IwTSSOAM5/rHfkMEacWENE5e6B7ucASxIapbSxwD1192RVxPnLDG69k/H2m6DAdhdtSkH7cYeett6WC/XH0OwblafduatDDpdAfH+eb3vxtLqmfpDBCWxEO6udmTsLZ8nvAs7vCFNbcemf7YELhav5lBLA9Fcx7dQ/8WnfZ/1tv2/ObszRgxDd0/vzm7nlNVJKxtCWv9sMCKCQ7CzHn8Hmla+A7mzbN6M4gMrK9pJGW7EvfbvmlhIYVktFn+fHGz/ID7Qiiflhfnm+W7FxLe9zch/RxLi4RlCOty/UH8m/ISkxfZxQIvSoRfrn6Ez8iOXQODzylvnggC8iCZB2sKucCxPma6J0K0JDT1epgQA5jhg4q7gcvPz2+fhWsaEQ4i8yQHOdv6tEhYvedquB6LVv7qXVDFDHqSCMwlE4wK1hzFh7H3QJeIbLKVFREPwmpUnZNW5T/fPHuG0cjzzfJ9RoAI+7R8NYUEEwGfXaOLqr+x9C9gOWr8Cf44yDW6p9FU6LxZvh7LU8sv5/zFN0xYSCSjzMEzURpBTM8VFt83Pzfw01NosRDXRRt3fV10ZSQ9OrlWTnJzYGRTF/u/n7U+Fi98WZ+7et/KTP7k60ldYq9zqW0iP4tBuu5cL235FNOJZ4vVzq/njORh2Lr2SJWy7TSHB3mQK/OSBuemEpzfLH+ULKtI7Plm+c0TTU1jlW7o5uyrTzvw/wussEgHGzbVUhPCNBicb85G66pJA4IaHJwACVdhuQ1hodDxyy0mu6l5ZINABYKTKRmGOKEXSDONYpZfrCCe2qMjjpK8FC55FvS0eXmdS+3Tu2jSdKRuwnaM/7COth6sTju/lq1gTMXYjEevK0C0CpfenqP5iAM2HoW08pvryNE+1Q8lxOMaLuQG2UlQskomEVWfFDbL2yESmEJYkHO+WX63xDNGWFF5bXp/DfkguBIeEp7XaxG/npzUkPsNBI02OqbkcbV6l/vJCs+wb/xT5idert5HqvbCIG+Y/Prll3KuXvdk+D9e54iwYjLqrCvIjOME+hR4w+u1s/9zuoPwe21z5KDWA4EHueKIrKOKZFmUzAm/OQsbDcgq9pcNWyqeBF5szr6WSGsKYUVd2iHCQtcx08WRdXS/8e2V62QKmXj0o+ckqv/aPLDAPo/7IIMAPm/89/lPJRf0XEoHyhEZCmngAaP1+N2F+g7JzdP0rep4xD5/iRwtYW3bHYQJWfIplCpJw2PQakmr/yZQme7sG9dQY3VJe3+RzsvqRWj+RASJLuj5ze//4OdlSHhhVBKjlVEetYRVspRKGIg1lmb79yw+Kfun5QXuCyFjxDUYRS3pK2XICSJvHFFhERY2msAaqskjvZgLE6IDmSn/mDBSl/JCBppgJaHXUBrhLLWRaJArIiKx6oJ5jCW5Q4SVrNY+BsW5kzKCq8Rpz76dAiN7P12X6nR2eARc/gB4JfG//sGLlNxzvp4gXtwsq7uTVt2oa2nv4zomiM65P0Q0iQjqfGVDclQndNFKll6JsKIylgYnQF4gLRA0SBf6a97hOX+W6p+bXRJW5reyXZkJhFXqVQgZBMQSxU/k6dtUGRfE90vcIrmogCHCyu6tvo2O7vtKnVOfXtZW/7NC2IosXONtEpnmUxSIKiEHw1cqJhJWEY8nrEErYEDvqDH7RppZYZvlT9utGyMayKvRt0LOb+hSeln6v0RYmdXk9B+AZ/xWXqflhumlhf7OgFzG8gj9VvbZDmRCF982xp576eZla2fvfbEWXh+Q0djh06DM0eF1xn8cnvy9kz2SFYWNYR2l2WnYNpNFS0OlUxXzIOZg5ISlFTCSlzZSPZca64iYBSwzlaFnn0bD9ewd82NEA3me9CJ9x+Tkfqu+7pFMP5KIMmxL7h4X+Z/XaT1hhc9HQC5DeWR+q8AKgosiOkqNP4qrYRGxoFtnD2/twTf2v80fg7807cC1h0BvrzP8ZJfrt4EvrMq1YtWW6yGss8j7CMgVcKDYN5Fc9514c3SSN1JhdnNZr6r8vdWAEa1tVM18U5tl720oXSTvnP607D0MY0QDvSJLzus7JMd3S5PvrL8kKSKsSCYc8D7vrf/n9VhPWJHbIPLdlPKQbprdJRdkFS0TCxo+Cuwbf83LMiNItBknP9d3rM3F9yPDIdc5SltfB77ic923l+VlV/3PFYgKaMIc+FWZDEQKzf6MJE3+BVPYZZFbG2cPvivnkmR/o66a94VFDR5hVlhNnDmElfutkr/Oy4wIKxod9Prbsky+zp+v+gfcO7JLXadSHrbxIq34jvZNWBXyc337z3f9/RxLW+aSnIjoais2l5nrUCtrq3i5AmXwSo6+rTI2iWpAbvVcfTMpi5fe4kjdtc4RXkxobqBrpN08PUOuiSKXek/PPs5WhOUsOWQUyRHCMX4rOzm2hrAimV5/X95J/9t6a19CdQ949CIr+S+jPPLuZLIa921hRXqPWVgg09QGMOI25ZdbwnVtafu95iKsJz0QcyPnCsSEBVDnOtpLuoYPUfuAe32quoTICo1XSUTPtdZD5NtBN9M607U4QfezNy0hIgWvh+96RtZQJMc72aG36lVDWAUrcrv5dZqxPefP1zhhZV255lkoWQZZHv4bBGYdYvisFXoNvvGXJq7a8tZ0YzMf1mord4XNtr3OdBaXCxaX91eYwLe1TXvOsJ45W6BVvPbCFzBXSAlj/EGrzTOKF1V0rEs9YQU7NchER9OoI1XyLlaa/FmyPLxj3k+mjIjGElZ0Hz4or1sUT4kYZ5+mhrCQhydLyLLE5/UAyUXE7ePJ/7wOh58jNKJogia6h6Ujz0Of2YcFyMEecwgL+URzpVS+zJlyL9pI79z6y/1cKlPPteSSt+fUXqJy1xCw5q/nHOvh+tR0Ozv7NUW5Qqik8sOyK0XSg9p/C0S6oLInHLBUbKPWaywI9j4t/E8LhWXL5GwSZSnbkEjMjPXoPsIgLyTHgiUXydHyeN8aZNcTVrAFj9HflrunL7qiY4uh8zqM60/8S7LAtj+xsU1fsIKgXBvHk0UwuTlquAiLjrzxKxHmXbE0TSf4sLCx7jSPVFaVlc4gjxIpKYnLiN9qeJF1rnP3go8midcsIVK9cc6xjuvTptnpdcj2ruJLpvhOFQnmiuTgTFoADfVgCURdQ23ozXq7L37dnd6Xc4FAbPG9lYV0sLSwSBgk2JMn987eRrs4pHTxesUSYVm/ldWplrCQJrKyRP+bs7d/bv79x583Z38V9S3MzBddojqcGjZk1SCTsrycWHZDWLDcsEvD68XL1V/NtIGcaNXRbytFr6PpD2JZOvKEvt7iHJSbLefpCAt5Rz2ZKe07x/pXE1Y0qmEIC+D8qiN683iAEGfiIaQV7LzgSST6j4Zc0/2Zk0c/3/LAQImwSt23KYQlvqxg2U1ft3xdZIks2yry9Tf1f01jCmUGlg2UmkNY6Gl4X1CYd9N+Rok2mhPW7LKatpbJSRD5DWEyZGGh/LDWvA8tyWx9n23dRRd5eX8xYUGpsUqIFN9H2BhhzeiaNoSSjfoNNUiMEtaQlUKBuJGlNZRHew/LXQZ2gkAeEWF5v5XqgvMUwkJ86e5NIPYqMs8f8H5XqHz/Lpu/ZAtnrzMZzm/Vixu9oJ1Vo/Gjxg+yyPIzL3i9VzOinrp6H6rkQS7a6RBZQe9IZy2PntHO8jZ/X7U2WMvXnQ9CWMOgjb0pFIi5Z/SnOyDyB3sHeqBRyhytgjUBi6EhqsmWnBY/Ecvygx89bMnJTDSdkl9OWMPrI6cSFvQXYsce+AV8pAwNuVaR+VB9+nvJgklbKCuYNWcrBw1xyAqfY2GBDHCUFiRDD5QBk0enHDLZtGBtadlAgEPl0vxqCAtxIxyG/GidfN8uD0BY0eiGAqVn6UeXviu3g/Boqw3NW881FabAVpxBAPZX6lpViCpGEaulsFuDd/oXhTQ3QBA9fQvbPKscyO/FHxkd1XR6RlqQnv0hTO9XnaVhwKoZ+M2tVyt7TJZ0iZwuCIuOscaPdpMsrma3goKlFsmOwqB7Tx52Qfj4vOiMj2RIWzblw//S4ePW5GWxxvUY3qW8Z4fnleOZ9LD/a0zs2SDsRwAaubeuJjf8/ahGqUMI5G2i78AeSst7e0ZAmDPoi6t1c+jzwZh8Pu4krPkYHkQCCesgsNdnGg15HpqoUv4H6CfXwzYWk4Q1htCR3idhHWnFqFpp1KJm8uYv7B5uscmYludIziSsI6mIqWqQsKYidoD4x9Q1TMO4ZafhAeDZJksS1jaoHUEaEtYRVEKNCrVzTfbdXRybc1JTliOIk+Y3nd1hmZD+9jEieQRFfVwqpNnoZveEwmTUx1XqEy0N5jztm5CG5D8SsjrR2qfaROAEETiUpUWyOsGHhSoTgWNAALNw82n8+3G6Y5bw0ES3Y8CDOhABInDkCGAOVO6A3C1pYUpFacbxkcND9Y4EAT4/R1IRx6KGWFuTPxoxRmz1i1yPBQfqsT0C8uKbuYRFc4c1Ll+EaXYYpXWuyPDcQwA+ppqN/4ac6jJJdUcPbk85/jlqBHZFWFgoLwuNV++qd3U4amCo3P4RgAku5LXGbg8Y/h2ypu6aD0imT3zvXzvmcIwI7IKwMN2ALoRjrN0T1UlXgdNEP9EK3IPa8kysrxdj2/wmfyniYauh68x6wn0MAqm/Ss9eZaTF0ea7fru4XL/y0eSFG61TxW6iGo6zH7mGXLvdEfRAniW9s4wZQASIwHEiAD8TSAZWUdov6q5xKWBHzW7vKPWRghzSiouLbH8pbOktcnpfM8Znq/qfX4O1L3LWd3LWa7/nU2TxtXMQG5dF0qXbqSGRU/epLLm/+pbyw9YuGFmXEe++TsdZO9SKCBCBFgH5ZoBZD5pcB2kxOxr21brb6TKylhJZ3Lfyku/0vmfdIE6aemPJDzt05p8rQ3ob7glLLDJsptd8JRoZe8LC9sXWumqVMxdeb3OLl0SACBwrAiCkvhUFX2e3+wbIAz6poQPWkh6J8DprR8NhQaG7qYf4U4NBHXTvcE/J0RIWwmCBpW5kN3ptCUstPM1n6Ix8tFs5FI/3iAAROBIELDlAJWthpf/YrTMRkBCG+K669Xs6Gq3FQdzIulEi6uKVv/VnycwSljjzV+l7kL1w6ebdpy/lrO9bstO8Wr1lm+Oku+oNsuNBBIjAiSAAcoDFoocQgbGwxGJZfZbbybrJ/T6QoYf4rxpS0TA923iWlPS+nq1OSkype9pZbhqONGJhNV1E6VK6/EtdxCEdVBeeiQAROCIE0ielui6gJ6w0aqhWTUdMWgRYL5aIpOsX+KbU0a3pkCayxCSe+XQd9EndyR89yykjrJ4V+KM3emn10/xxJmFZNHhNBE4AgeT/wYdHX4u2SljShZOPl3xriUJGEE0XSsgKc65WP1pfkHS/3OeuIEs+ktIbcUyfqbf+s+Sbgk/NE+h9j4CgaImwcA9yrE64tuSoXUQZCDDlOYHqoopEgAi0XSo3sRjdOzRuPYQI1j+bryrjy8rfhEiSP6gjGSUMISmM2GHKhO+mSV4X4tAXK26tn5Hv5CBfIabA6T9EWEiXLL30eXnVJ30Nuqy3lpNnIkAETgCBZFVhysDIqGDl56NAdpAZHbY7hnggTUuOUZq5YcijpM9c2UxPBIjAARDQLuG+s7aEte+8KJ8IEIFHigAJ65FWLItFBB4jAvD9oOu07wOOdXbP9o0y5RMBIkAEiAARIAJEgAgQASJABIgAESACRIAITEEAc6F+hW9sik6MSwSIABFoEYBTPW2Yh+1mfvS2jWkj8YIIEAEicGgE0kzzNMOdo4GHrg3mTwSIQBEBXcKDMw8iQASIwM4QkHlX69tQHiwjrL+zB5bPyJbKq+/NR01uM9+UbjEjXcL1K1lYHVlZsiSn2UceM9/9AmnNV3SUhdhYB5h+CNMDYZ4cRXYQrml4JgJE4AQRwAROkIUlAC2GkIPZ6yqR1dfeQuZEamm/9Dad7GL6RvxWaeZ8+mKTzUNl2Z0ZIlmQmXTsFkXn//PNAFV3Ovq1VngmAo8AgdT4sUtot30xioWGnvbK6vbAku2SzdYvWnwhGrPTp6wTXN/1FjOLPLNZIPKFPH8kIvvZmwXvd4MYIyzsDIEF3Fyv6NHlfyJw4gho4/dkJN0z2Xq4IyzZ/72wbCdZUhfNfuv9XUwVIsmj2QlC5es9e0Y8ux2NyDb5qs6axhKTTJ9oPqphwzUuz0SACJwwAtr4YSVh6gEsHPEZNTt4otHrIQRg9kXvuntpn3Tt8tk0mhbnlFfa5rhWVkrXfbKrk2O7iKlLCN1hFao/S/IwRGd14TURIAIniIASFlTHdbJuvrddMks+ILQanxDSgDz8IfKb/eFTd7P77JePq/9Td7MjTYRbndP/RFiY89W3zHLflsrlmQgQgRNEwDZ+9R+BtPSwhJXi5iOKiVQ68vFdulaWjNql0T2R5UYgES/p0H0BGlYbfFj2sDojHDqmPH08EpbFjddE4OQR8I0f5GOtI0tYCIdlhGkNGgcWF/xR2h0EINq91H3i0//3ktYCJrJW71trTuLJVsmpu5cc9f3vJiK911kIq+nO9uRjG2Z2CS0kvCYCp40AiMaSjS8N/FT2ENKSqRAYWcTHHT6HpCBEhntr/Ybhm5bkrLxEPnfNvu+I31lqGOmLdPM6Iw/1W/Vlx+E2Dq+JABEgAkSACBABIkAEiAARIAJEgAgQASJABIgAESACRIAIEAEiQASIABEgAkSACBABIkAEiAARIAJEgAgQASJABIgAESACRIAIEIETQ+D/RSUpb6GZaksAAAAASUVORK5CYII="></image></defs>
            </svg>
        </div>
    <div class="divLogoText">
    <span class="logoText">${info.textLogo}</span>
    </div>
</div>
<form id="formElem">
    <label></label>
    <input type="text" id="input" placeholder="Название модели или артикул">
</form>
<div class="tel">
    <div class="telImg">
        <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M21.313 12.1063C21.0385 11.7076 20.5146 11.6132 20.1219 11.8777C19.7292 12.1422 19.6239 12.6785 19.8871 13.0703C20.6808 14.2484 20.6789 15.7728 19.8825 16.955L19.8818 16.9557C19.652 17.2954 19.6957 17.7531 19.9844 18.0419C20.0231 18.0806 20.0654 18.1158 20.1119 18.1482C20.5051 18.4099 21.0406 18.3053 21.3058 17.9119C22.4954 16.1463 22.4993 13.8679 21.313 12.1063Z" fill="#959AAE"></path><path d="M23.7321 9.60122C23.597 9.42087 23.3919 9.30906 23.1655 9.28335C22.9342 9.25553 22.7062 9.32152 22.524 9.46856C22.1538 9.76405 22.0929 10.3052 22.3879 10.675C24.4243 13.223 24.4203 16.7903 22.3787 19.3474C22.1051 19.69 22.1311 20.1809 22.4395 20.4894C22.4627 20.5126 22.4867 20.5337 22.5128 20.5541C22.6917 20.6977 22.9152 20.7616 23.1438 20.7358C23.3717 20.7093 23.5757 20.5968 23.7192 20.4166C26.267 17.2266 26.2732 12.7797 23.7321 9.60122Z" fill="#959AAE"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M13.6278 15.0026C13.6286 20.6433 17.5309 18.0208 17.5321 21.6115C17.5326 25.0739 18.1809 26.4158 13.7941 26.4152C13.2985 26.3613 8.89587 27.2722 8.89416 15.0027C8.89246 2.73179 13.2953 3.63937 13.7909 3.58555C18.1891 3.58541 17.529 4.92716 17.5295 8.38956C17.53 11.981 13.627 9.36202 13.6278 15.0026Z" fill="#959AAE"></path></svg>
    </div>
<div class="telText">${info.tel}</div>
</div>
<button class="button">${info.textButton}</button> 
</div>`
    let leftElem = document.querySelector('.blockHederBottonLeftElem');
    let rigttElem = document.querySelector('.blockHederBottonRightElem');
    createUl(info.arrLeft,leftElem, "ulLeft", "liLeft", "aLeft")
    createUl(info.arrRight,rigttElem, "ulRight", "liRight", "aRight")
}

export default Heder
