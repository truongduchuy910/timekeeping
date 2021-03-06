// const fetch = require("node-fetch");
export default class TFace {
  url = `http://b88dbc29ad5c.ngrok.io`;

  option = {
    headers: {
      Accept: "application/json",
      "Content-type": "application/json",
    },
    method: "POST",
    redirect: "follow",
  };
  constructor(url) {
    this.url = url;
  }
  /**
   * @param {Array.<String>} urls
   * @param {String} id
   * @returns
   */
  async uploadByUrls(urls, id) {
    var status;
    do {
      try {
        status = await this.isAvailable();
        console.log("status", status);
      } catch (e) {
        console.log("status", false);
      }
    } while (!status);
    const url = `${this.url}/uploadByUrls`;
    const body = JSON.stringify({
      url_list: urls,
      txtusername: id,
    });
    const response = await fetch(url, {
      ...this.option,
      body,
    });
    return response.status === 200;
  }
  async train() {
    var status;
    do {
      try {
        status = await this.isAvailable();
        console.log("status", status);
      } catch (e) {
        console.log("status", false);
      }
    } while (!status);
    try {
      const url = `${this.url}/trainning`;
      await fetch(url, {
        headers: {
          Accept: "application/json",
          "Content-type": "application/json",
        },
        method: "GET",
        redirect: "follow",
      });
    } catch (e) {
      console.log("cannot call train");
    }
    do {
      try {
        status = await this.isAvailable();
        console.log("status", status);
      } catch (e) {
        console.log("status", false);
      }
    } while (!status);
  }
  /**
   * @param {Array.<String>} urls
   * @returns {name_list_rp: Array.<String>}
   */
  async getIdByUrls(urls) {
    var status;
    do {
      try {
        status = await this.isAvailable();
        console.log("status", status);
      } catch (e) {
        console.log("status", false);
      }
    } while (!status);
    const url = `${this.url}/identifiedStrList`;
    const body = JSON.stringify({
      url_list: urls,
    });
    const response = await fetch(url, {
      ...this.option,
      body,
    });
    if (response.status === 200) {
      const data = await response.json();
      return data;
    } else console.error(response.status, response.statusText);
  }
  async getIdByUrl(url) {
    var status;
    do {
      try {
        status = await this.isAvailable();
        console.log("status", status);
      } catch (e) {
        console.log("status", false);
      }
    } while (!status);
    const _url = `${this.url}/identifiedStr`;
    const body = JSON.stringify({
      url: url,
    });
    const response = await fetch(_url, {
      ...this.option,
      body,
    });
    if (response.status === 200) {
      const data = await response.json();
      return data;
    } else console.error(response.statusText);
  }
  async isAvailable() {
    const _url = `${this.url}/checkAvailable`;

    const response = await fetch(_url, {
      headers: {
        Accept: "application/json",
        "Content-type": "application/json",
      },
      method: "GET",
      redirect: "follow",
    });

    return response.status === 200;
  }
  /**
   * @param {String} id
   * @returns
   */
  async deleteById(id) {
    const url = `${this.url}/deleteById`;
    const body = JSON.stringify({
      id,
    });
    const response = await fetch(url, {
      ...this.option,
      body,
    });
    return response.status === 200;
  }
}
// (async () => {
//   const tface = new TFace();
//   /**
//    * UPLOAD
//    */
//   console.log("==== UPLOAD");
//   console.log(
//     "uploadByUrls",
//     102180234,
//     await tface.uploadByUrls(
//       [
//         "http://cb.dut.udn.vn/ImageSV/18/102180234.jpg",
//         "http://cb.dut.udn.vn/ImageSV/18/102180234.jpg",
//         "http://cb.dut.udn.vn/ImageSV/18/102180234.jpg",
//         "http://cb.dut.udn.vn/ImageSV/18/102180234.jpg",
//         "http://cb.dut.udn.vn/ImageSV/18/102180234.jpg",
//         "http://cb.dut.udn.vn/ImageSV/18/102180234.jpg",
//         "http://cb.dut.udn.vn/ImageSV/18/102180234.jpg",
//         "http://cb.dut.udn.vn/ImageSV/18/102180234.jpg",
//         "http://cb.dut.udn.vn/ImageSV/18/102180234.jpg",
//         "http://cb.dut.udn.vn/ImageSV/18/102180234.jpg",
//         "http://cb.dut.udn.vn/ImageSV/18/102180234.jpg",
//         "http://cb.dut.udn.vn/ImageSV/18/102180234.jpg",
//         "http://cb.dut.udn.vn/ImageSV/18/102180234.jpg",
//         "http://cb.dut.udn.vn/ImageSV/18/102180234.jpg",
//         "http://cb.dut.udn.vn/ImageSV/18/102180234.jpg",
//         "http://cb.dut.udn.vn/ImageSV/18/102180234.jpg",
//         "http://cb.dut.udn.vn/ImageSV/18/102180234.jpg",
//         "http://cb.dut.udn.vn/ImageSV/18/102180234.jpg",
//         "http://cb.dut.udn.vn/ImageSV/18/102180234.jpg",
//         "http://cb.dut.udn.vn/ImageSV/18/102180234.jpg",
//         "http://cb.dut.udn.vn/ImageSV/18/102180234.jpg",
//         "http://cb.dut.udn.vn/ImageSV/18/102180234.jpg",
//         "http://cb.dut.udn.vn/ImageSV/18/102180234.jpg",
//         "http://cb.dut.udn.vn/ImageSV/18/102180234.jpg",
//         "http://cb.dut.udn.vn/ImageSV/18/102180234.jpg",
//         "http://cb.dut.udn.vn/ImageSV/18/102180234.jpg",
//         "http://cb.dut.udn.vn/ImageSV/18/102180234.jpg",
//         "http://cb.dut.udn.vn/ImageSV/18/102180234.jpg",
//         "http://cb.dut.udn.vn/ImageSV/18/102180234.jpg",
//         "http://cb.dut.udn.vn/ImageSV/18/102180234.jpg",
//         "http://cb.dut.udn.vn/ImageSV/18/102180234.jpg",
//         "http://cb.dut.udn.vn/ImageSV/18/102180234.jpg",
//         "http://cb.dut.udn.vn/ImageSV/18/102180234.jpg",
//         "http://cb.dut.udn.vn/ImageSV/18/102180234.jpg",
//         "http://cb.dut.udn.vn/ImageSV/18/102180234.jpg",
//         "http://cb.dut.udn.vn/ImageSV/18/102180234.jpg",
//         "http://cb.dut.udn.vn/ImageSV/18/102180234.jpg",
//       ].slice(0, 20),
//       "1",
//     ),
//   );
//   console.log(
//     "uploadByUrls",
//     102180229,
//     await tface.uploadByUrls(
//       [
//         "http://cb.dut.udn.vn/ImageSV/18/102180229.jpg",
//         "http://cb.dut.udn.vn/ImageSV/18/102180229.jpg",
//         "http://cb.dut.udn.vn/ImageSV/18/102180229.jpg",
//         "http://cb.dut.udn.vn/ImageSV/18/102180229.jpg",
//         "http://cb.dut.udn.vn/ImageSV/18/102180229.jpg",
//         "http://cb.dut.udn.vn/ImageSV/18/102180229.jpg",
//         "http://cb.dut.udn.vn/ImageSV/18/102180229.jpg",
//         "http://cb.dut.udn.vn/ImageSV/18/102180229.jpg",
//         "http://cb.dut.udn.vn/ImageSV/18/102180229.jpg",
//         "http://cb.dut.udn.vn/ImageSV/18/102180229.jpg",
//         "http://cb.dut.udn.vn/ImageSV/18/102180229.jpg",
//         "http://cb.dut.udn.vn/ImageSV/18/102180229.jpg",
//         "http://cb.dut.udn.vn/ImageSV/18/102180229.jpg",
//         "http://cb.dut.udn.vn/ImageSV/18/102180229.jpg",
//         "http://cb.dut.udn.vn/ImageSV/18/102180229.jpg",
//         "http://cb.dut.udn.vn/ImageSV/18/102180229.jpg",
//         "http://cb.dut.udn.vn/ImageSV/18/102180229.jpg",
//         "http://cb.dut.udn.vn/ImageSV/18/102180229.jpg",
//         "http://cb.dut.udn.vn/ImageSV/18/102180229.jpg",
//         "http://cb.dut.udn.vn/ImageSV/18/102180229.jpg",
//       ].slice(0, 20),
//       "2",
//     ),
//   );
//   console.log(
//     "uploadByUrls",
//     102180234,
//     await tface.uploadByUrls(
//       [
//         "http://cb.dut.udn.vn/ImageSV/18/102180234.jpg",
//         "http://cb.dut.udn.vn/ImageSV/18/102180234.jpg",
//         "http://cb.dut.udn.vn/ImageSV/18/102180234.jpg",
//         "http://cb.dut.udn.vn/ImageSV/18/102180234.jpg",
//         "http://cb.dut.udn.vn/ImageSV/18/102180234.jpg",
//         "http://cb.dut.udn.vn/ImageSV/18/102180234.jpg",
//         "http://cb.dut.udn.vn/ImageSV/18/102180234.jpg",
//         "http://cb.dut.udn.vn/ImageSV/18/102180234.jpg",
//         "http://cb.dut.udn.vn/ImageSV/18/102180234.jpg",
//         "http://cb.dut.udn.vn/ImageSV/18/102180234.jpg",
//         "http://cb.dut.udn.vn/ImageSV/18/102180234.jpg",
//         "http://cb.dut.udn.vn/ImageSV/18/102180234.jpg",
//         "http://cb.dut.udn.vn/ImageSV/18/102180234.jpg",
//         "http://cb.dut.udn.vn/ImageSV/18/102180234.jpg",
//         "http://cb.dut.udn.vn/ImageSV/18/102180234.jpg",
//         "http://cb.dut.udn.vn/ImageSV/18/102180234.jpg",
//         "http://cb.dut.udn.vn/ImageSV/18/102180234.jpg",
//         "http://cb.dut.udn.vn/ImageSV/18/102180234.jpg",
//         "http://cb.dut.udn.vn/ImageSV/18/102180234.jpg",
//         "http://cb.dut.udn.vn/ImageSV/18/102180234.jpg",
//         "http://cb.dut.udn.vn/ImageSV/18/102180234.jpg",
//         "http://cb.dut.udn.vn/ImageSV/18/102180234.jpg",
//         "http://cb.dut.udn.vn/ImageSV/18/102180234.jpg",
//         "http://cb.dut.udn.vn/ImageSV/18/102180234.jpg",
//         "http://cb.dut.udn.vn/ImageSV/18/102180234.jpg",
//         "http://cb.dut.udn.vn/ImageSV/18/102180234.jpg",
//         "http://cb.dut.udn.vn/ImageSV/18/102180234.jpg",
//         "http://cb.dut.udn.vn/ImageSV/18/102180234.jpg",
//         "http://cb.dut.udn.vn/ImageSV/18/102180234.jpg",
//         "http://cb.dut.udn.vn/ImageSV/18/102180234.jpg",
//         "http://cb.dut.udn.vn/ImageSV/18/102180234.jpg",
//         "http://cb.dut.udn.vn/ImageSV/18/102180234.jpg",
//         "http://cb.dut.udn.vn/ImageSV/18/102180234.jpg",
//         "http://cb.dut.udn.vn/ImageSV/18/102180234.jpg",
//         "http://cb.dut.udn.vn/ImageSV/18/102180234.jpg",
//         "http://cb.dut.udn.vn/ImageSV/18/102180234.jpg",
//         "http://cb.dut.udn.vn/ImageSV/18/102180234.jpg",
//       ].slice(0, 20),
//       "1",
//     ),
//   );

//   console.log(
//     "uploadByUrls",
//     102180208,
//     await tface.uploadByUrls(
//       [
//         "http://cb.dut.udn.vn/ImageSV/18/102180208.jpg",
//         "http://cb.dut.udn.vn/ImageSV/18/102180208.jpg",
//         "http://cb.dut.udn.vn/ImageSV/18/102180208.jpg",
//         "http://cb.dut.udn.vn/ImageSV/18/102180208.jpg",
//         "http://cb.dut.udn.vn/ImageSV/18/102180208.jpg",
//         "http://cb.dut.udn.vn/ImageSV/18/102180208.jpg",
//         "http://cb.dut.udn.vn/ImageSV/18/102180208.jpg",
//         "http://cb.dut.udn.vn/ImageSV/18/102180208.jpg",
//         "http://cb.dut.udn.vn/ImageSV/18/102180208.jpg",
//         "http://cb.dut.udn.vn/ImageSV/18/102180208.jpg",
//         "http://cb.dut.udn.vn/ImageSV/18/102180208.jpg",
//         "http://cb.dut.udn.vn/ImageSV/18/102180208.jpg",
//         "http://cb.dut.udn.vn/ImageSV/18/102180208.jpg",
//         "http://cb.dut.udn.vn/ImageSV/18/102180208.jpg",
//         "http://cb.dut.udn.vn/ImageSV/18/102180208.jpg",
//         "http://cb.dut.udn.vn/ImageSV/18/102180208.jpg",
//         "http://cb.dut.udn.vn/ImageSV/18/102180208.jpg",
//         "http://cb.dut.udn.vn/ImageSV/18/102180208.jpg",
//         "http://cb.dut.udn.vn/ImageSV/18/102180208.jpg",
//         "http://cb.dut.udn.vn/ImageSV/18/102180208.jpg",
//         "http://cb.dut.udn.vn/ImageSV/18/102180208.jpg",
//       ].slice(0, 20),
//       "3",
//     ),
//   );
//   console.log("train", await tface.train());

//   /**
//    * IDENTIFY
//    */

//   console.log("==== IDENTIFY");
//   console.log(
//     "getIdByUrls",
//     [102180207, 102180208, 102180229, 102180234],
//     await tface.getIdByUrls([
//       "https://cb.dut.udn.vn/ImageSV/18/102180207.jpg",
//       "https://cb.dut.udn.vn/ImageSV/18/102180208.jpg",
//       "https://cb.dut.udn.vn/ImageSV/18/102180229.jpg",
//       "https://cb.dut.udn.vn/ImageSV/18/102180234.jpg",
//     ]),
//   );
//   console.log(
//     "getIdByUrl",
//     102180207,
//     await tface.getIdByUrl("http://cb.dut.udn.vn/ImageSV/18/102180207.jpg"),
//   );
//   console.log(
//     "getIdByUrl",
//     102180229,
//     await tface.getIdByUrl("http://cb.dut.udn.vn/ImageSV/18/102180229.jpg"),
//   );
//   console.log(
//     "getIdByUrl",
//     102180234,
//     await tface.getIdByUrl("http://cb.dut.udn.vn/ImageSV/18/102180234.jpg"),
//   );

//   const { name_rp: huy } = await tface.getIdByUrl(
//     "http://cb.dut.udn.vn/ImageSV/18/102180208.jpg",
//   );
//   console.log("getIdUrl", 102180208, huy);

//   /**
//    * DELELTE
//    */
//   if (huy) {
//     console.log("==== DELETE");
//     console.log("deleteById", huy, await tface.deleteById(huy));
//   }

//   console.log("train", await tface.train());
//   console.log("==== AFTER DELETE");
//   /**
//    * CHECK AFTER DELETE
//    */
//   console.log(
//     "getIdByUrls",
//     [102180207, 102180208, 102180229, 102180234],
//     await tface.getIdByUrls([
//       "https://cb.dut.udn.vn/ImageSV/18/102180207.jpg",
//       "https://cb.dut.udn.vn/ImageSV/18/102180208.jpg",
//       "https://cb.dut.udn.vn/ImageSV/18/102180229.jpg",
//       "https://cb.dut.udn.vn/ImageSV/18/102180234.jpg",
//     ]),
//   );
// })();
