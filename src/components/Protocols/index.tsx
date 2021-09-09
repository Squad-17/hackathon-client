import { ReactComponent as Mask } from '../../assets/protocols/mask.svg';
import { ReactComponent as Eyes } from '../../assets/protocols/eyes.svg';
import { ReactComponent as Clean } from '../../assets/protocols/clean.svg';
import { ReactComponent as Hands } from '../../assets/protocols/hands.svg';
import { ReactComponent as Distance } from '../../assets/protocols/distance.svg';
import { ReactComponent as Temperature } from '../../assets/protocols/temperature.svg';

import Container from '../Container';

import * as S from './styles';

export default function Protocols() {
  return (
    <Container>
      <S.Wrapper>
        <h1>Protocolos e Procedimentos</h1>

        <ul className='protocols'>
          <li className='protocol'>
            <Mask />
            <p className='blue'>Sempre use máscara</p>
          </li>
          <li className='protocol'>
            <Temperature />
            <p className='orange'>Verifique sua temperatura</p>
          </li>
          <li className='protocol'>
            <Eyes />
            <p className='blue'>Não toque olhos, nariz e boca</p>
          </li>
          <li className='protocol'>
            <Hands />
            <p className='orange'>Higienize as mãos frequentemente</p>
          </li>
          <li className='protocol'>
            <Clean />
            <p className='blue'>Higienize superfícies e espaços</p>
          </li>
          <li className='protocol'>
            <Distance />
            <p className='orange'>Mantenha uma distância segura</p>
          </li>
        </ul>
      </S.Wrapper>
    </Container>
  );
}
