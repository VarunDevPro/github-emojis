import { Stack, Spinner } from '@chakra-ui/core';
import { EmojiCards } from './EmojiCards';

// import fetcher from '../lib/fetcher';
// import useSwr from 'swr';

export const Main = () => {
	// const { data } = useSwr('/api/get-emojis', fetcher);
	const data = JSON.parse('{"100":"https://github.githubassets.com/images/icons/emoji/unicode/1f4af.png?v8","1234":"https://github.githubassets.com/images/icons/emoji/unicode/1f522.png?v8","+1":"https://github.githubassets.com/images/icons/emoji/unicode/1f44d.png?v8","-1":"https://github.githubassets.com/images/icons/emoji/unicode/1f44e.png?v8","1st_place_medal":"https://github.githubassets.com/images/icons/emoji/unicode/1f947.png?v8","2nd_place_medal":"https://github.githubassets.com/images/icons/emoji/unicode/1f948.png?v8","3rd_place_medal":"https://github.githubassets.com/images/icons/emoji/unicode/1f949.png?v8","8ball":"https://github.githubassets.com/images/icons/emoji/unicode/1f3b1.png?v8","a":"https://github.githubassets.com/images/icons/emoji/unicode/1f170.png?v8","ab":"https://github.githubassets.com/images/icons/emoji/unicode/1f18e.png?v8","abacus":"https://github.githubassets.com/images/icons/emoji/unicode/1f9ee.png?v8","abc":"https://github.githubassets.com/images/icons/emoji/unicode/1f524.png?v8","abcd":"https://github.githubassets.com/images/icons/emoji/unicode/1f521.png?v8","accept":"https://github.githubassets.com/images/icons/emoji/unicode/1f251.png?v8","adhesive_bandage":"https://github.githubassets.com/images/icons/emoji/unicode/1fa79.png?v8","adult":"https://github.githubassets.com/images/icons/emoji/unicode/1f9d1.png?v8","aerial_tramway":"https://github.githubassets.com/images/icons/emoji/unicode/1f6a1.png?v8","afghanistan":"https://github.githubassets.com/images/icons/emoji/unicode/1f1e6-1f1eb.png?v8","airplane":"https://github.githubassets.com/images/icons/emoji/unicode/2708.png?v8","aland_islands":"https://github.githubassets.com/images/icons/emoji/unicode/1f1e6-1f1fd.png?v8","alarm_clock":"https://github.githubassets.com/images/icons/emoji/unicode/23f0.png?v8","albania":"https://github.githubassets.com/images/icons/emoji/unicode/1f1e6-1f1f1.png?v8","alembic":"https://github.githubassets.com/images/icons/emoji/unicode/2697.png?v8","algeria":"https://github.githubassets.com/images/icons/emoji/unicode/1f1e9-1f1ff.png?v8","alien":"https://github.githubassets.com/images/icons/emoji/unicode/1f47d.png?v8","ambulance":"https://github.githubassets.com/images/icons/emoji/unicode/1f691.png?v8","american_samoa":"https://github.githubassets.com/images/icons/emoji/unicode/1f1e6-1f1f8.png?v8","amphora":"https://github.githubassets.com/images/icons/emoji/unicode/1f3fa.png?v8","anchor":"https://github.githubassets.com/images/icons/emoji/unicode/2693.png?v8","andorra":"https://github.githubassets.com/images/icons/emoji/unicode/1f1e6-1f1e9.png?v8","angel":"https://github.githubassets.com/images/icons/emoji/unicode/1f47c.png?v8","anger":"https://github.githubassets.com/images/icons/emoji/unicode/1f4a2.png?v8","angola":"https://github.githubassets.com/images/icons/emoji/unicode/1f1e6-1f1f4.png?v8","angry":"https://github.githubassets.com/images/icons/emoji/unicode/1f620.png?v8","anguilla":"https://github.githubassets.com/images/icons/emoji/unicode/1f1e6-1f1ee.png?v8","anguished":"https://github.githubassets.com/images/icons/emoji/unicode/1f627.png?v8","ant":"https://github.githubassets.com/images/icons/emoji/unicode/1f41c.png?v8","antarctica":"https://github.githubassets.com/images/icons/emoji/unicode/1f1e6-1f1f6.png?v8","antigua_barbuda":"https://github.githubassets.com/images/icons/emoji/unicode/1f1e6-1f1ec.png?v8","apple":"https://github.githubassets.com/images/icons/emoji/unicode/1f34e.png?v8","aquarius":"https://github.githubassets.com/images/icons/emoji/unicode/2652.png?v8","argentina":"https://github.githubassets.com/images/icons/emoji/unicode/1f1e6-1f1f7.png?v8","aries":"https://github.githubassets.com/images/icons/emoji/unicode/2648.png?v8","armenia":"https://github.githubassets.com/images/icons/emoji/unicode/1f1e6-1f1f2.png?v8","arrow_backward":"https://github.githubassets.com/images/icons/emoji/unicode/25c0.png?v8","arrow_double_down":"https://github.githubassets.com/images/icons/emoji/unicode/23ec.png?v8","arrow_double_up":"https://github.githubassets.com/images/icons/emoji/unicode/23eb.png?v8","arrow_down":"https://github.githubassets.com/images/icons/emoji/unicode/2b07.png?v8","arrow_down_small":"https://github.githubassets.com/images/icons/emoji/unicode/1f53d.png?v8","arrow_forward":"https://github.githubassets.com/images/icons/emoji/unicode/25b6.png?v8","arrow_heading_down":"https://github.githubassets.com/images/icons/emoji/unicode/2935.png?v8","arrow_heading_up":"https://github.githubassets.com/images/icons/emoji/unicode/2934.png?v8","arrow_left":"https://github.githubassets.com/images/icons/emoji/unicode/2b05.png?v8","arrow_lower_left":"https://github.githubassets.com/images/icons/emoji/unicode/2199.png?v8","arrow_lower_right":"https://github.githubassets.com/images/icons/emoji/unicode/2198.png?v8","arrow_right":"https://github.githubassets.com/images/icons/emoji/unicode/27a1.png?v8",\"artist\":\"https://github.githubassets.com/images/icons/emoji/unicode/1f9d1-1f3a8.png?v8\",\"aruba\":\"https://github.githubassets.com/images/icons/emoji/unicode/1f1e6-1f1fc.png?v8\",\"ascension_island\":\"https://github.githubassets.com/images/icons/emoji/unicode/1f1e6-1f1e8.png?v8\",\"asterisk\":\"https://github.githubassets.com/images/icons/emoji/unicode/002a-20e3.png?v8\",\"astonished\":\"https://github.githubassets.com/images/icons/emoji/unicode/1f632.png?v8\",\"astronaut\":\"https://github.githubassets.com/images/icons/emoji/unicode/1f9d1-1f680.png?v8\",\"athletic_shoe\":\"https://github.githubassets.com/images/icons/emoji/unicode/1f45f.png?v8\",\"atm\":\"https://github.githubassets.com/images/icons/emoji/unicode/1f3e7.png?v8\",\"atom\":\"https://github.githubassets.com/images/icons/emoji/atom.png?v8\",\"atom_symbol\":\"https://github.githubassets.com/images/icons/emoji/unicode/269b.png?v8\",\"australia\":\"https://github.githubassets.com/images/icons/emoji/unicode/1f1e6-1f1fa.png?v8\",\"austria\":\"https://github.githubassets.com/images/icons/emoji/unicode/1f1e6-1f1f9.png?v8\",\"auto_rickshaw\":\"https://github.githubassets.com/images/icons/emoji/unicode/1f6fa.png?v8\",\"avocado\":\"https://github.githubassets.com/images/icons/emoji/unicode/1f951.png?v8\",\"axe\":\"https://github.githubassets.com/images/icons/emoji/unicode/1fa93.png?v8\",\"azerbaijan\":\"https://github.githubassets.com/images/icons/emoji/unicode/1f1e6-1f1ff.png?v8\",\"b\":\"https://github.githubassets.com/images/icons/emoji/unicode/1f171.png?v8\",\"baby\":\"https://github.githubassets.com/images/icons/emoji/unicode/1f476.png?v8\",\"baby_bottle\":\"https://github.githubassets.com/images/icons/emoji/unicode/1f37c.png?v8\",\"baby_chick\":\"https://github.githubassets.com/images/icons/emoji/unicode/1f424.png?v8\",\"baby_symbol\":\"https://github.githubassets.com/images/icons/emoji/unicode/1f6bc.png?v8\",\"back\":\"https://github.githubassets.com/images/icons/emoji/unicode/1f519.png?v8\",\"bacon\":\"https://github.githubassets.com/images/icons/emoji/unicode/1f953.png?v8\",\"badger\":\"https://github.githubassets.com/images/icons/emoji/unicode/1f9a1.png?v8\",\"badminton\":\"https://github.githubassets.com/images/icons/emoji/unicode/1f3f8.png?v8\",\"bagel\":\"https://github.githubassets.com/images/icons/emoji/unicode/1f96f.png?v8\",\"baggage_claim\":\"https://github.githubassets.com/images/icons/emoji/unicode/1f6c4.png?v8\",\"baguette_bread\":\"https://github.githubassets.com/images/icons/emoji/unicode/1f956.png?v8\",\"bahamas\":\"https://github.githubassets.com/images/icons/emoji/unicode/1f1e7-1f1f8.png?v8\",\"bahrain\":\"https://github.githubassets.com/images/icons/emoji/unicode/1f1e7-1f1ed.png?v8\",\"balance_scale\":\"https://github.githubassets.com/images/icons/emoji/unicode/2696.png?v8\",\"bald_man\":\"https://github.githubassets.com/images/icons/emoji/unicode/1f468-1f9b2.png?v8\",\"bald_woman\":\"https://github.githubassets.com/images/icons/emoji/unicode/1f469-1f9b2.png?v8\",\"ballet_shoes\":\"https://github.githubassets.com/images/icons/emoji/unicode/1fa70.png?v8\",\"balloon\":\"https://github.githubassets.com/images/icons/emoji/unicode/1f388.png?v8\",\"ballot_box\":\"https://github.githubassets.com/images/icons/emoji/unicode/1f5f3.png?v8\",\"ballot_box_with_check\":\"https://github.githubassets.com/images/icons/emoji/unicode/2611.png?v8\",\"bamboo\":\"https://github.githubassets.com/images/icons/emoji/unicode/1f38d.png?v8\",\"banana\":\"https://github.githubassets.com/images/icons/emoji/unicode/1f34c.png?v8\",\"bangbang\":\"https://github.githubassets.com/images/icons/emoji/unicode/203c.png?v8\",\"bangladesh\":\"https://github.githubassets.com/images/icons/emoji/unicode/1f1e7-1f1e9.png?v8\",\"banjo\":\"https://github.githubassets.com/images/icons/emoji/unicode/1fa95.png?v8\",\"bank\":\"https://github.githubassets.com/images/icons/emoji/unicode/1f3e6.png?v8\",\"bar_chart\":\"https://github.githubassets.com/images/icons/emoji/unicode/1f4ca.png?v8\",\"barbados\":\"https://github.githubassets.com/images/icons/emoji/unicode/1f1e7-1f1e7.png?v8\",\"barber\":\"https://github.githubassets.com/images/icons/emoji/unicode/1f488.png?v8\",\"baseball\":\"https://github.githubassets.com/images/icons/emoji/unicode/26be.png?v8\",\"basecamp\":\"https://github.githubassets.com/images/icons/emoji/basecamp.png?v8\",\"basecampy\":\"https://github.githubassets.com/images/icons/emoji/basecampy.png?v8\",\"basket\":\"https://github.githubassets.com/images/icons/emoji/unicode/1f9fa.png?v8\",\"basketball\":\"https://github.githubassets.com/images/icons/emoji/unicode/1f3c0.png?v8\",\"basketball_man\":\"https://github.githubassets.com/images/icons/emoji/unicode/26f9-2642.png?v8\",\"basketball_woman\":\"https://github.githubassets.com/images/icons/emoji/unicode/26f9-2640.png?v8\",\"bat\":\"https://github.githubassets.com/images/icons/emoji/unicode/1f987.png?v8\",\"bath\":\"https://github.githubassets.com/images/icons/emoji/unicode/1f6c0.png?v8\",\"bathtub\":\"https://github.githubassets.com/images/icons/emoji/unicode/1f6c1.png?v8\",\"battery\":\"https://github.githubassets.com/images/icons/emoji/unicode/1f50b.png?v8\",\"beach_umbrella\":\"https://github.githubassets.com/images/icons/emoji/unicode/1f3d6.png?v8\",\"bear\":\"https://github.githubassets.com/images/icons/emoji/unicode/1f43b.png?v8\",\"bearded_person\":\"https://github.githubassets.com/images/icons/emoji/unicode/1f9d4.png?v8\",\"bed\":\"https://github.githubassets.com/images/icons/emoji/unicode/1f6cf.png?v8\",\"bee\":\"https://github.githubassets.com/images/icons/emoji/unicode/1f41d.png?v8\",\"beer\":\"https://github.githubassets.com/images/icons/emoji/unicode/1f37a.png?v8\",\"beers\":\"https://github.githubassets.com/images/icons/emoji/unicode/1f37b.png?v8\",\"beetle\":\"https://github.githubassets.com/images/icons/emoji/unicode/1f41e.png?v8\",\"beginner\":\"https://github.githubassets.com/images/icons/emoji/unicode/1f530.png?v8\",\"belarus\":\"https://github.githubassets.com/images/icons/emoji/unicode/1f1e7-1f1fe.png?v8\",\"belgium\":\"https://github.githubassets.com/images/icons/emoji/unicode/1f1e7-1f1ea.png?v8\",\"belize\":\"https://github.githubassets.com/images/icons/emoji/unicode/1f1e7-1f1ff.png?v8\",\"bell\":\"https://github.githubassets.com/images/icons/emoji/unicode/1f514.png?v8\",\"bellhop_bell\":\"https://github.githubassets.com/images/icons/emoji/unicode/1f6ce.png?v8\",\"benin\":\"https://github.githubassets.com/images/icons/emoji/unicode/1f1e7-1f1ef.png?v8\",\"bento\":\"https://github.githubassets.com/images/icons/emoji/unicode/1f371.png?v8\",\"bermuda\":\"https://github.githubassets.com/images/icons/emoji/unicode/1f1e7-1f1f2.png?v8\",\"beverage_box\":\"https://github.githubassets.com/images/icons/emoji/unicode/1f9c3.png?v8\",\"bhutan\":\"https://github.githubassets.com/images/icons/emoji/unicode/1f1e7-1f1f9.png?v8\",\"bicyclist\":\"https://github.githubassets.com/images/icons/emoji/unicode/1f6b4.png?v8\",\"bike\":\"https://github.githubassets.com/images/icons/emoji/unicode/1f6b2.png?v8\",\"biking_man\":\"https://github.githubassets.com/images/icons/emoji/unicode/1f6b4-2642.png?v8\",\"biking_woman\":\"https://github.githubassets.com/images/icons/emoji/unicode/1f6b4-2640.png?v8\",\"bikini\":\"https://github.githubassets.com/images/icons/emoji/unicode/1f459.png?v8\",\"billed_cap\":\"https://github.githubassets.com/images/icons/emoji/unicode/1f9e2.png?v8\",\"biohazard\":\"https://github.githubassets.com/images/icons/emoji/unicode/2623.png?v8\",\"bird\":\"https://github.githubassets.com/images/icons/emoji/unicode/1f426.png?v8\",\"birthday\":\"https://github.githubassets.com/images/icons/emoji/unicode/1f382.png?v8\",\"black_circle\":\"https://github.githubassets.com/images/icons/emoji/unicode/26ab.png?v8\",\"black_flag\":\"https://github.githubassets.com/images/icons/emoji/unicode/1f3f4.png?v8\",\"black_heart\":\"https://github.githubassets.com/images/icons/emoji/unicode/1f5a4.png?v8\",\"black_joker\":\"https://github.githubassets.com/images/icons/emoji/unicode/1f0cf.png?v8\",\"black_large_square\":\"https://github.githubassets.com/images/icons/emoji/unicode/2b1b.png?v8\",\"black_medium_small_square\":\"https://github.githubassets.com/images/icons/emoji/unicode/25fe.png?v8\",\"black_medium_square\":\"https://github.githubassets.com/images/icons/emoji/unicode/25fc.png?v8\",\"black_nib\":\"https://github.githubassets.com/images/icons/emoji/unicode/2712.png?v8\",\"black_small_square\":\"https://github.githubassets.com/images/icons/emoji/unicode/25aa.png?v8\",\"black_square_button\":\"https://github.githubassets.com/images/icons/emoji/unicode/1f532.png?v8\"}');

	if (!data) {
		return (
			<Stack pt='8'>
				<Spinner />
			</Stack>
		);
	}

	const emojiObjToArray = Object.keys(data).map((code: string) => {
		return {
			code: `:${code}:`,
			img: data[code] as string,
		};
	});

	return <EmojiCards emojis={emojiObjToArray} />;
};
