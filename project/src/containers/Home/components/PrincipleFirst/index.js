import React from 'react'
import { Link } from 'react-scroll'

import { Container, Grid } from '@material-ui/core'

import styles from '../common/style.module.scss'

function PrincipleFirst() {
  return (
    <>
      <div className={styles.section} id="principle_1">
        <Container maxWidth="lg">
          <Grid container spacing={5}>
            <Grid item xs={6}>
              <div className={styles['info-block']}>
                <div className={styles['info-title']}>
                  <p className={styles['info-text']}>Blockchain is a feature not a product.</p>
                </div>
                <div className={styles['info-subtitle']}>
                  <p className={styles['subtitle-text']}>
                    We believe blockchain technology is most effective as a functional layer of a
                    bigger solution stack. It's notthe end-all be-all
                  </p>
                </div>
                <Link to="principle_2" smooth="true" className={styles['info-link']}>
                  Makes sense, next
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

export default PrincipleFirst
