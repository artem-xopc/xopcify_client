'use client';

import { ITrack } from '@/types/track';
import Link from 'next/link';
import styles from '../tracks.module.scss';
import Container from '@mui/material/Container';
import { Box, ButtonBase, Grid, Paper, TextField, Typography } from '@mui/material';

const TrackPage = () => {
  const track: ITrack = {
    _id: '1',
    name: 'Two Moons',
    artist: 'Bobby Richards',
    text: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius soluta eveniet tempore accusantium voluptatibus quos rem blanditiis, commodi ea voluptatem maxime sed aliquam. Deleniti, ex eius corporis facere quos ipsam.
    Harum provident dolores, ea a natus assumenda, eos iste repudiandae veniam dolor nemo modi excepturi dolorum ut nam asperiores illo exercitationem? Nemo pariatur unde perspiciatis, voluptates accusantium in sed porro?
    Adipisci nulla praesentium laudantium, odit a sunt ea obcaecati nam? Ratione deserunt odio dolore, aspernatur ex error modi natus nostrum aperiam, provident ipsa. Ipsum repellendus architecto ratione nam itaque! Eveniet?
    Magni, dolores dolorem ex molestias reprehenderit qui odit natus voluptates ratione, perferendis cupiditate temporibus ad, culpa sit. Iusto voluptas dignissimos dolor doloribus velit optio modi hic ipsa? Sint, illum maiores.
    Voluptatibus temporibus consequuntur quasi inventore similique. Quas rerum, tenetur omnis natus quam doloribus nostrum modi hic atque fugit explicabo, expedita, consequatur at saepe temporibus a nesciunt voluptatibus libero sapiente repellendus!
    Eum doloribus reprehenderit quis deserunt, aspernatur ab unde quos repellendus voluptatem eveniet alias consequuntur porro nesciunt earum dolorum illum tenetur, tempora quas temporibus dignissimos, natus est. Quasi veniam cumque nemo.
    Repellat aspernatur neque laboriosam ea. Soluta doloribus fugit nisi aliquid ea aliquam dolorum? Labore ab animi dolorum voluptatibus nulla iste laudantium, et provident laborum dolor atque beatae non sint sapiente.
    Quaerat dicta laudantium sit dolorum aut dolor repellat tempore illum molestias modi. Earum atque tempore at! Eveniet accusantium dignissimos explicabo tempora libero? Molestias tempore repellendus ducimus beatae in optio. Culpa.
    Consequuntur voluptate placeat, architecto officiis adipisci similique blanditiis, doloribus illum hic odio dolores possimus incidunt quos corrupti molestiae dolorem quasi enim atque magni doloremque ea sint iste, laboriosam iusto. Blanditiis?
    Minus, quisquam eligendi excepturi a sit quae officiis, porro blanditiis fugiat deleniti cupiditate maiores est ipsa illo consequatur delectus. Perspiciatis ducimus veritatis temporibus saepe eius optio a? Laudantium, in incidunt.
    Laudantium totam sit praesentium sapiente obcaecati est unde mollitia numquam, veniam corrupti nobis eos eligendi perferendis voluptates a tempora fuga temporibus neque velit voluptate illo provident at quos veritatis? Explicabo.
    Quasi voluptates optio a est nostrum dolor magni laudantium accusamus? Veritatis, officia, commodi consequatur iste dolor incidunt, quam velit iure voluptatum perspiciatis molestias. Ut tempore nihil sunt odio, repudiandae reiciendis.
    Quibusdam officiis quaerat odit suscipit blanditiis facere? Vel voluptatem, quam libero commodi suscipit illum fuga dolor eius quod saepe! Reiciendis aperiam labore sunt eum beatae necessitatibus placeat earum, magni molestiae.
    Magni, iste? Odio, dolorem quis. Similique, fugiat beatae soluta nostrum, excepturi quo voluptatum sunt repellendus dignissimos ullam laudantium earum! Porro, nisi quis voluptates reiciendis nobis necessitatibus nihil cum? Molestias, dolorem?
    Quo dolor ad quia cum delectus, explicabo eius fugiat pariatur aperiam blanditiis beatae et, minus repudiandae molestiae eum praesentium natus placeat eveniet accusamus? Ipsum consequuntur quo, eaque inventore ea ab?
    Suscipit, obcaecati? Velit eos odio vel laboriosam porro, quisquam nulla atque, corrupti praesentium aperiam repellendus ipsam tempora cupiditate, facilis inventore eum ea? Cum veniam quasi architecto nesciunt facilis tenetur quos?
    Laudantium accusantium odio harum quaerat, ad sunt itaque reprehenderit laborum nisi, quae dolore quia quisquam, ullam architecto magni commodi atque delectus doloribus ipsum saepe voluptatibus dicta iusto natus. Aspernatur, fugiat.
    Quibusdam exercitationem neque repellendus omnis quasi sint et aliquam possimus voluptas tempora nobis in doloribus inventore porro ea ratione suscipit recusandae praesentium fuga facere, earum fugiat. Voluptatem quo nulla facere?
    Maxime, explicabo. Voluptatem id eveniet doloremque voluptatum culpa voluptates hic fugit autem doloribus eius. Expedita vero perspiciatis et corporis voluptatum quis placeat temporibus ut, iste earum nam, repellendus excepturi odio?
    Provident cum fuga quisquam aliquam cupiditate non explicabo ipsam velit perferendis vel, libero beatae minus quibusdam facere maiores qui ipsa repellendus dicta enim maxime iste atque minima. Error, facere at.
    Deleniti quasi architecto aliquid exercitationem, inventore commodi cumque soluta. Soluta facere ex laudantium laboriosam in recusandae hic voluptates reprehenderit, consectetur temporibus, accusamus nisi quo ipsum, earum eaque doloribus minima doloremque!
    Repudiandae deleniti totam ea. Voluptatum velit delectus eos ea optio est tempore esse magni. Quibusdam sint reiciendis illo a laudantium expedita nesciunt veniam numquam recusandae tempore excepturi dolore, quo eius.
    Fugit sed saepe corporis repudiandae quibusdam neque libero quas magnam aperiam, ut recusandae minima molestiae quisquam laudantium sapiente natus, aspernatur temporibus, nam alias cupiditate itaque nulla quae delectus veritatis. Fugit.
    Eos obcaecati molestiae dolorum placeat dolorem a at, accusantium, deserunt aut praesentium magni? Saepe facilis incidunt minima molestias possimus, ducimus, consequuntur iure itaque at earum ipsum soluta, corporis iste eaque.
    Illo officiis minus saepe pariatur ipsa fuga natus eos eligendi corporis suscipit reprehenderit aut ipsum nisi tempora praesentium vel id quae, fugiat incidunt magnam veniam numquam facere recusandae? Consequatur, sequi!
    Odio repellendus ea iure odit, mollitia eveniet sit a fugiat! Dignissimos vitae nam aliquam tenetur excepturi, velit ipsa illum laborum provident eaque, exercitationem expedita et quidem voluptates quaerat sunt. Ratione!
    Minus pariatur quidem placeat explicabo autem amet labore? Nostrum, ad odit deserunt suscipit harum facilis quibusdam, quis praesentium et rem quia! Laboriosam, necessitatibus explicabo similique ipsum doloribus velit aliquam optio?
    Voluptatem optio eligendi perspiciatis commodi quisquam. Quidem similique aspernatur facilis ullam. Pariatur a optio nulla quia at, placeat rem asperiores, perferendis est temporibus fugiat vitae eius qui, maiores modi. Atque?
    Neque vitae nobis aperiam temporibus dolore laborum cumque sunt quis doloribus esse? Optio, quibusdam dolorem, nobis maxime omnis culpa neque nisi eveniet quas doloribus voluptatum animi, ducimus iusto sit. Aspernatur?
    Deleniti delectus tempore autem, perspiciatis praesentium dolores sunt? Consequuntur fugiat sequi quaerat dignissimos facilis nisi non laborum illo! Dicta quidem quis numquam nobis distinctio unde ut temporibus nulla ad consequatur.`,
    listens: 42,
    picture: 'http://localhost:5000/picture/e60e2a6b-7329-4482-af38-5fba3906563f.jpg',
    audio: 'http://localhost:5000/audio/6835743c-936b-4fbb-9e3f-c53133927ec5.mp3',
    comments: [],
  };

  return (
    <Paper
      sx={{
        p: 2,
        margin: 'auto',
        minWidth: 750,
        maxWidth: 1000,
        flexGrow: 1,
        backgroundColor: (theme) => (theme.palette.mode === 'dark' ? '#1A2027' : '#fff'),
      }}
    >
      <Grid container spacing={2}>
        <Grid item>
          <ButtonBase sx={{ width: 200, height: 200 }}>
            <img alt="track logo" src={track.picture} className={styles.image} />
          </ButtonBase>
        </Grid>
        <Grid item xs={12} sm container>
          <Grid item xs container direction="column" spacing={2}>
            <Grid item xs>
              <Typography gutterBottom variant="subtitle1" component="div">
                {track.name}
              </Typography>
              <Typography variant="body2" gutterBottom>
                Artist - {track.artist}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Auditions - {track.listens}
              </Typography>
            </Grid>
          </Grid>
        </Grid>
        <Link href={'/tracks'}>
          <button className={styles.button__comment}>Back to tracks</button>
        </Link>
      </Grid>

      <Grid item xs={12} sm container>
        <Grid item xs container direction="column" spacing={2}>
          <Grid item xs>
            <Grid container direction="column" justifyContent="flex-start" alignItems="flex-start">
              <Typography gutterBottom variant="subtitle1" component="div">
                Lyrics
              </Typography>
              <Typography variant="body1">{track.text}</Typography>
            </Grid>
            <Grid container>
              <h3 style={{ marginTop: '10px' }}>Comment this track</h3>
              <TextField label="Enter your name" fullWidth style={{ marginTop: '10px' }} />
              <TextField
                label="Comment"
                fullWidth
                multiline
                rows={6}
                style={{ marginTop: '10px' }}
              />
              <button className={styles.button__comment}>Send comment</button>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Paper>
  );
  //   <Container className={styles.track__container}>
  //     <Grid>
  //       <Link href={'/tracks'}>
  //         <h3 className={styles.back__button}>Back to Tracks</h3>
  //       </Link>
  //     </Grid>
  //     <Box className={styles.box__item}>
  //       <Grid item xs={8} className={styles.image__item}>
  //         <img src={track.picture} className={styles.image} />
  //       </Grid>
  //       <Grid className={styles.track__info}>
  //         <h4 style={{ marginBottom: '5px' }}>
  //           {track.name} - {track.artist}
  //         </h4>
  //         <h6>Auditions - {track.listens}</h6>
  //       </Grid>
  //     </Box>
  //     <Grid container direction="column" justifyContent="flex-start" alignItems="flex-start">
  //       <Grid className="text_title">Lyrics</Grid>
  //       <Grid>{track.text}</Grid>
  //     </Grid>
  //     <Grid container>
  //       <h3>Comment this track</h3>
  //       <TextField label="Enter your name" fullWidth />
  //       <TextField label="Comment" fullWidth multiline rows={6} />
  //     </Grid>
  //   </Container>
  // );
};

export default TrackPage;
