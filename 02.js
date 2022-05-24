window.converter = {
  getBytesByHex: hex => Math.ceil(hex.length / 2),

  toLittleEndian: hex => new BigNumber(hex.split(/(..)/g).filter(s => s).reverse().join(''), 16).toFixed(),
  toBigEndian: hex => new BigNumber(hex, 16).toFixed(),
  toHex: number => new BigNumber(number).toString(16),
}