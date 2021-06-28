import React from 'react'
import { Link } from 'react-scroll'

import { Container, Grid } from '@material-ui/core'

import styles from '../common/style.module.scss'

function PrincipleFifth() {
  return (
    <>
      <div className={styles.section} id="principle_5">
        <Container maxWidth="lg">
          <Grid container spacing={5}>
            <Grid item xs={6}>
              <div className={styles['info-block']}>
                <div className={styles['info-title']}>
                  <p className={styles['info-text']}>We have to think differently.</p>
                </div>
                <div className={styles['info-subtitle']}>
                  <p className={styles['subtitle-text']}>
                    “You have to start with the customer experience and work backwards to the
                    technology. You can’t start with the technology and try to figure out where to
                    sell it.”
                  </p>
                </div>
                <Link to="main_section" smooth="true" className={styles['info-link']}>
                  That’s it! Intrigued?
                </Link>
              </div>
            </Grid>
            <Grid item xs={6}>
              <div>Stone</div>
            </Grid>
          </Grid>
        </Container>
      </div>
    </>
  )
}

export default PrincipleFifth
