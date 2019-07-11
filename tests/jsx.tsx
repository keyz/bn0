const React = {
  createElement: (...args: Array<any>) => args
}

export default function main() {
  console.log(<jsx canParse={true} />);
  console.log(<test isGood={true} />);
}
