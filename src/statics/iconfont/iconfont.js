import {createGlobalStyle} from 'styled-components'

export const IconGlobalstyle = createGlobalStyle`
@font-face {
  font-family: "iconfont";
  src: url('./iconfont.eot?t=1564975116524'); /* IE9 */
  src: url('./iconfont.eot?t=1564975116524#iefix') format('embedded-opentype'), /* IE6-IE8 */
  url('data:application/x-font-woff2;charset=utf-8;base64,d09GMgABAAAAAAYsAAsAAAAAC3wAAAXgAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHEIGVgCDKgqKIIgCATYCJAMUCwwABCAFhG0HSxuJCcgOJcHAwGCgAFDAUEoCbC1n4eCxZQUKUKLj+LJQwLZGlGWFrHEVsrrCsBEdys2aSA1aT0iphoopFRVKE0otLE1XFFY1hOqK0TVx5HWiysHluDZ+YPMsy+UbY9MY24oGR1HAAY01aIEU4BCgkHMnanM8JY2HOgM1lV2suwloGhMF2iqubAT2MlsaIONKqZAB+4JO7qAEtbJsmJlBeAY26rgBfg6Ap+j74Q8kBHsgKhKw99o+KeoH0k/4yzpEY9XoTFrALWeBOI+EeUAmXDTajiBJcB6iqcejVgC10y7ymT6nv6yzWpEYBVex1JrIxT+8JIuEEtiyNijWCqHMZ/Q0gi5PIBXJT4BF5nsnJOI3DaKJXiC81rkxwt0wimq539HNLdZBgEf2C0vs7XHhouZbFshsbjYaG02mJouloamvgELSAvFG44LGGyZQb4cam6CqQ2tubs4naEx1LTfNSgxQvHiejpsc3BCqJ45F6j2JwzCOJwhDKKEneCwoE+spMaA/9nwa1zjkNnriYBDXsokwpOqJ80lcK4dNnPbk8E1CQ2imntjjTehFB4fa47DrWa8bL0ldjt0K3QQdDuIEG2dVHww6MsSPvha6iZiO5FvOJx08fx7jME9txnE8pOWJaa/Kg56khocgrV7EHeYCbGpaNBd2PYoDGjGu4US8KMzYeFyiw3UZymtykxqMnxId9+HwSfGJaJ2YOGexFJyyxFpa3rVk8o16wybC0qAnnhsH3KrF4j9nxEQ8f1JUbTANjp/w1WF+fGktTDeJ63SYyIvnBTpcrMOOk5wQ0EPT3olPw3sOFGIsL8EImh0bBT3CtnbeTzDh2Sq7JtwEQDMIjhefvwlpW1q0go1pTefngOaIcNMtCMok2ZdfMRHjBcjs27ezyG7kzVuEoY3+iAqwOsX12acvz62Fz52DrV5zDmKEHANZA68dD/653tb2XuxYHrzu/Pl1sHSF/Zb0Bvrvv/lGR8G+f1YaldZBanA5z3T+y83XnrltNNQHx3Q0XUv96BFLJkqK/LPkEg9p/CIy2b0gIfHp/0zFIvnF7avn/6WktMVifvFB7b92CX9jP3WPD36y1o9Nu6q4BkP8FThHtY97yW4GQfBBNXru0L6FitLOiMKNvKYZDuiA0e07am0RXMLNHKvLQ2EYlRZvl9lgP/i5jZ9xQN0igpkQYltWJUTGI3YudjByqLP1XxsV6mDrY5fii2fZ0sB3rDcuzqx0dJcgSC+2tQfJKQ1qzdkR7YTI3Ki0zmHnHIdARUFr3UUMX2s8YN+zsoLJXCxd0MbGl5wurCgum5YmRQZcuPDRIXF7ZOX7hTY2XQ0XTsFYlNKv9G5k5enustSQYWuAmwQJSDpzJHPw5xXPoTjJcysz6dgcNgUX2y2KpCo7eu6Kpake89CqzZ6iJL8P81zh3nqD4YodA+Zi2nIvoVmX2r7b35I5201kS+EqaRexG51IoekT8eHwK5Xm76CKTmG9MC89YU99lccEjl0iJNMSL9AK4H84nYONUf8VqR7RAkC6hd9+C73cvNtZe3qyfrMX/j8aPq7vOKLzfziD4TyC5ut8yucPLMuG0NYXWSv2eFq4CGnAnlIUCF1I8VH6vb+MYmgwn/oVQxlElVFIauOYTJiHQssClGqr0DSnZH7LADVEyA6AWWsYBL1OQdT1BkmvF5hMeA8Kw76DUm9AoOkweKzYMhmUggI1JWOpfrJvEamUM6O0jKwgzqynFOPDMnVeGFGbKfWY0kPGx8SVIyXUKKVeYszYfEUCy9IkrWZGyGK2HzU8zJAqNTNIydmYAZZVZcTG0k0PipEzI0BgkxpFhkXpR+qzCElJjjGKDuqzBJXP16MojBsmo+4oqbM3o6iNUTZPihcjbgCmRDY6qORR8sfMp5CART+NRIvpjBGkYrRQhp0gg6Rq7jaIIseKMTDBr5IhFqvRQ2Ux26tGvrgamuzVigBDCIRCNpAtaJ7IRhX9skHlIuiYSmNPv2PhAKWOhvNkAAA=') format('woff2'),
  url('./iconfont.woff?t=1564975116524') format('woff'),
  url('./iconfont.ttf?t=1564975116524') format('truetype'), /* chrome, firefox, opera, Safari, Android, iOS 4.2+ */
  url('./iconfont.svg?t=1564975116524#iconfont') format('svg'); /* iOS 4.1- */
}

.iconfont {
  font-family: "iconfont" !important;
  font-size: 16px;
  font-style: normal;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
`
