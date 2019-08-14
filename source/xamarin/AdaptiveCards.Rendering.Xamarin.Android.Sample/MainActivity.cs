﻿using AdaptiveCards.BotConnection;
using AdaptiveCards.Rendering.Xamarin.Android.ObjectModel;
using AdaptiveCards.Rendering.Xamarin.Android.Renderer;
using AdaptiveCards.Rendering.Xamarin.Android.Renderer.ActionHandler;
using Android.App;
using Android.OS;
using Android.Support.V4.App;
using Android.Widget;
using System;

namespace AdaptiveCards.Rendering.Xamarin.Android.Sample
{
    [Activity(Label = "AdaptiveCards", MainLauncher = true, Icon = "@mipmap/icon")]
    public class MainActivity : FragmentActivity, ICardActionHandler
    {
        private PayloadRetriever m_payloadRetriever = null;

        public MainActivity()
        {
            Java.Lang.Runtime.GetRuntime().LoadLibrary("adaptivecards-native-lib");
        }

        protected override void OnCreate(Bundle savedInstanceState)
        {
            base.OnCreate(savedInstanceState);

            // Set our view from the "main" layout resource
            SetContentView(Resource.Layout.Main);

            m_payloadRetriever = new PayloadRetriever();

            Button localButton = FindViewById<Button>(Resource.Id.local);
            localButton.Click += OnLocalClick;

            Button remoteButton = FindViewById<Button>(Resource.Id.remote);
            remoteButton.Click += OnRemoteClickAsync;
        }

        private async void OnRemoteClickAsync(object sender, EventArgs e)
        {
            RenderAdaptiveCard(await m_payloadRetriever.RequestRemoteAdaptiveCard());
        }

        private void OnLocalClick(object sender, EventArgs e)
        {
            RenderAdaptiveCard(m_payloadRetriever.RequestLocalAdaptiveCard());
        }

        private void RenderAdaptiveCard(string jsonText)
        {
            try
            {
                ParseResult parseResult = AdaptiveCard.DeserializeFromString(jsonText, AdaptiveCardRenderer.Version);
                LinearLayout layout = (LinearLayout)FindViewById(Resource.Id.visualAdaptiveCardLayout);
                layout.RemoveAllViews();

                var renderedCard = AdaptiveCardRenderer.Instance.Render(Application.Context, SupportFragmentManager, parseResult.AdaptiveCard, this, new HostConfig());
                layout.AddView(renderedCard.View);
            }
            catch (Exception ex)
            {
                string s = ex.ToString();
            }
        }

        public void OnAction(BaseActionElement element, RenderedAdaptiveCard renderedCard)
        {
            ActionType actionType = element.ElementType;
            var inputs = renderedCard.Inputs;
            string inputValues = string.Empty;
            foreach (var inputString in inputs)
            {
                inputValues += $"{{{inputString.Key} : {inputString.Value}}}\n";
            }
            if (actionType == ActionType.Submit)
            {
                var submitAction = SubmitAction.Dynamic_cast(element);
                var data = submitAction.DataJson;
                Toast.MakeText(this, data + "\n" + inputValues, ToastLength.Short).Show();
            }
            else if (actionType == ActionType.ShowCard)
            {
                var showcardAction = ShowCardAction.Dynamic_cast(element);
                var card = showcardAction.Card;
                Toast.MakeText(this, card.ToString() + "\n" + inputValues, ToastLength.Short).Show();
            }
            else if (actionType == ActionType.OpenUrl)
            {
                var openUrlAction = OpenUrlAction.Dynamic_cast(element);
                var url = openUrlAction.Url;
                Toast.MakeText(this, url + "\n" + inputValues, ToastLength.Short).Show();
            }
        }

        public void OnMediaPlay(BaseCardElement element, RenderedAdaptiveCard renderedCard)
        {
        }

        public void OnMediaStop(BaseCardElement element, RenderedAdaptiveCard renderedCard)
        {
        }
    }
}
