<template>
  <v-menu>
    <template #activator="{ props }">
      <v-btn icon class="mr-2" v-bind="props">
        <v-badge dot color="info">
          <v-icon icon="mdi-bell-outline"></v-icon>
        </v-badge>
      </v-btn>
    </template>

    <v-container
      style="
        width: 520px;
        top: 12px;
        left: 717px;
        max-height: 290px;
        max-width: 1319px;
        min-width: 48px;
        transform-origin: right top;
      "
    >
      <v-sheet overflow-hidden>
        <v-toolbar class="ps-4 pe-6">
          <div class="d-flex align-center" style="width: 100%; position: relative; height: 48px">
            View Read
          </div></v-toolbar
        >
        <v-divider aria-orientation="horizontal" role="separator"></v-divider>

        <v-responsive style="max-height: 340px; min-height: 204px; overflow-y: scroll">
          <v-list tabindex="0" role="listbox">
            <v-list-item class="pe-4 align-self-start" prepend-icon="mdi-cog">
              <v-list-item-title class="text-wrap text-h6">Updated Documentation Settings</v-list-item-title>
              <div class="text-caption mb-1 font-weight-bold text-medium-emphasis">Friday, August 25, 2023</div>
              <div class="text-medium-emphasis text-caption">
                <p>
                  We’ve recently added some enhancements to the documentation’s settings drawer, including a new
                  Developer Mode that let’s you experiment with our upcoming GitHub integration.
                </p>
                <p>All sponsor <strong>$1</strong> or greater get to enjoy an Ad Free documentation experience.</p>
              </div>
            </v-list-item>
            <v-divider aria-orientation="horizontal" role="separator"></v-divider>
          </v-list>
          <v-list tabindex="0" role="listbox">
            <v-list-item class="pe-4 align-self-start" prepend-icon="mdi-star-box">
              <v-list-item-title class="text-wrap text-h6">Customized SLA from Vuetify </v-list-item-title>
              <div class="text-caption mb-1 font-weight-bold text-medium-emphasis">Wednesday, July 19, 2023</div>
              <div class="text-medium-emphasis text-caption">
                <p>
                  Elevate your development team’s capabilities with a personalized support plan that provides direct
                  access to the <strong>Vuetify Core Development team</strong>. Get your questions answered by the
                  experts and receive invaluable guidance for your projects.
                </p>
              </div>
            </v-list-item>
            <v-divider aria-orientation="horizontal" role="separator"></v-divider>
          </v-list>
          <v-list tabindex="0" role="listbox">
            <v-list-item class="pe-4 align-self-start" prepend-icon="mdi-controller">
              <v-list-item-title class="text-wrap text-h6">Unleash Your Vuetify Creativity!</v-list-item-title>
              <div class="text-caption mb-1 font-weight-bold text-medium-emphasis">Tuesday, May 16, 2023</div>
              <div class="text-medium-emphasis text-caption">
                <p>
                  Dive into Vuetify Play today and bring your Vuetify projects to life with an immersive playground
                  experience. Unleash your creativity and explore the limitless possibilities of Vuetify!
                </p>
              </div>
            </v-list-item>
            <v-divider aria-orientation="horizontal" role="separator"></v-divider>
          </v-list>
        </v-responsive>
      </v-sheet>
    </v-container>
  </v-menu>
</template>
