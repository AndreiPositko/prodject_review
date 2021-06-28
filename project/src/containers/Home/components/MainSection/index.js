import React from 'react'
import { Link } from 'react-scroll'

import { Container, Grid } from '@material-ui/core'

import styles from '../common/style.module.scss'

function MainSection() {
  return (
    <>
      <div className={styles.section} id="main_section">
        <Container maxWidth="lg">
          <Grid container spacing={5}>
            <Grid item xs={6}>
              <div className={styles['info-block']}>
                <div className={styles['main-title']}>
                  <p className={styles['info-text']}>Making blockchain work for mere mortals</p>
                </div>
                <Link
                  activeClass="active"
                  to="principle_1"
                  smooth="true"
                  className={styles['info-link']}
                >
                  Explore 5 peer principles
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

export default MainSection
