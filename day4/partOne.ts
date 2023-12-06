var fs = require("fs");

const partOne = () => {
  const fileData = fs.readFileSync("day4/file.txt", "utf8");

  const pairs = fileData.split("\n");

  let overlappingPairs = 0;

  for (const pair of pairs) {
    const sectionPairs: string[] = pair.split(",");

    const pairAB = sectionPairs[0];
    const ab = pairAB.split("-");
    console.log("ab", ab);

    const pairXY = sectionPairs[1];
    const xy = pairXY.split("-");
    console.log("xy", xy);

    const a = Number(ab[0]);
    //console.log("A", a);

    const b = Number(ab[1]);
    //console.log("B", b);

    const x = Number(xy[0]);
    //console.log("X", x);

    const y = Number(xy[1]);
    //console.log("Y", y);

    const ApertenceX = a >= x;
    // console.log("A_PERTENCE_X", ApertenceX);

    const BpertenceY = b <= y;
    // console.log("B_PERTENCE_Y", BpertenceY);

    console.log("-----------------------");

    const XpertenceA = x >= a;
    //console.log("X_PERTENCE_A", XpertenceA);

    const YpertenceB = y <= b;
    // console.log("Y_PERTENCE_B", YpertenceB);

    console.log("-----------------------");

    const ABpertenceXY = ApertenceX && BpertenceY;
    console.log("AB_PERTENCE_XY", ABpertenceXY);

    const XYpertenceAB = XpertenceA && YpertenceB;
    console.log("XY_PERTENCE_AB", XYpertenceAB);

    console.log("-----------------------");
    console.log("-----------------------");

    if (ABpertenceXY || XYpertenceAB) {
      overlappingPairs++;
    }
  }

  console.log("overlapping pairs", overlappingPairs);
};

export default partOne;
