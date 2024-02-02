import {gql} from 'apollo-angular';
import {Injectable} from '@angular/core';

const GET_MEMBER = gql`
query getMember {
  member {
    ...member
    __typename
  }
}

fragment member on Member {
  cards {
    bonus
    gall
    airmiles
    xl
    wijndomein
    etos
    __typename
  }
  analytics {
    idga
    idmon
    optins
    __typename
  }
  memberships
  __typename
}`;

const MEMBER_INFO = gql`
  query memberInfo {
  member {
    id
    name {
      first
      __typename
    }
    emailAddress
    memberships
    isB2B
    consents {
      items {
        code
        granted
        version
        __typename
      }
      __typename
    }
    consentsToShow
    cards {
      airmiles
      bonus
      gall
      __typename
    }
    analytics {
      idga
      digimon
      idsas
      optins
      __typename
    }
    __typename
  }
  memberLoginState
  memberIsOnboarded
}`;

@Injectable({
  providedIn: 'root'
})
export class AhMemberService {

}
