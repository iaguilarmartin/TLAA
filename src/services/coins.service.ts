import { CoinsDto } from '../dtos/coins.dto';

class CoinsService {
  public getCoins = async (totalNum: string): Promise<CoinsDto> => {
    const coinsDto = new CoinsDto();
    const total = parseFloat(totalNum);
    coinsDto.total = total;
    const floorNumber = Math.floor(total);
    let decimalPart = Math.round((total - floorNumber) * 100);

    const bars2 = Math.floor(floorNumber / 2);

    coinsDto.coins.bars[2] = bars2;
    coinsDto.coins.bars[1] = floorNumber % 2;

    decimalPart = this.calculateCoins(decimalPart, 50, coinsDto);
    decimalPart = this.calculateCoins(decimalPart, 20, coinsDto);
    decimalPart = this.calculateCoins(decimalPart, 10, coinsDto);
    decimalPart = this.calculateCoins(decimalPart, 5, coinsDto);
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    decimalPart = this.calculateCoins(decimalPart, 1, coinsDto);
    return coinsDto;
  };

  private calculateCoins(total: number, coinValue: number, coinsDto: CoinsDto) {
    while (total >= coinValue) {
      total = total - coinValue;
      coinsDto.coins.foos[coinValue] = coinsDto.coins.foos[coinValue] + 1;
    }

    return total;
  }
}

export default CoinsService;
