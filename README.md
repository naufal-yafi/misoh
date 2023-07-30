# Misoh

#### Kenapa saya membuat repo ini?

Dikarenakan nanti saya akan membuat aplikasi chatting jadi saya memerlukan tool untuk mensensor kata - kata kotor.

Untuk sekarang ini masih terdapat 18 kata kotor https://github.com/naufal-yafi/misoh/blob/main/src/datas.ts. Oleh karena itu, saya perlu bantuan teman - teman semua.

#### Contoh Aplikasi

[Visit Site Now](https://misoh-chat-app.netlify.app/)

```
Command:
    - clear : to clean all chat
```

#### Bagaimana menggunakan tool ini?

1. Silahkan unduh repo ini terlebih dahulu

```sh
git clone https://github.com/naufal-yafi/misoh.git
```

2. Unduh semua dependensi yang digunakan

```
npm i
```

3. Setelah itu lakukan bundle

```
npm run prod
```

Output: dist/misoh-[date].bundle.js

4. Setelah itu gunakan tool ini dengan mengimport ke project yang sedang kamu gunakan

```
import misoh from "./dist/misoh-20230730-0721.bundlejs"

console.log(misoh("babi guling"))

// Ouput:
// ba** guling
```

###### 30-07-2023
