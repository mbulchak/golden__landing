import { MembershipPlans } from '../MembershipPlans';
import { Modules } from '../Modules';
import { Reviews } from '../Reviews';
import { ScrollSection } from '../ScrollSection';
import { Services } from '../Services';
import { Team } from '../Team';
import {Token} from '../Token';
import { Video } from '../Video';

export const Main = () => {
  return (
    <>
      <Token />

      <ScrollSection />

      <Services />

      <Team />

      <Modules />

      <Reviews />

      <MembershipPlans />

      <Video />
    </>
  );
};
