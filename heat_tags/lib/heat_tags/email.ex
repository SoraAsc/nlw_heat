defmodule HeatTags.Email do
  import Bamboo.Email
  alias HeatTags.Tags.PickEmails
  alias HeatTags.Reports.Create
  alias HeatTags.Tags.Count

  def routine_email do
    emailsToSend = PickEmails.call()
    fromEmail = "testemail@kmail.com"

    map = Count.call()

    messageText =
      for {k, v} <- map do
        "A palavra '#{k}' foi repetida #{v} vezes"
      end
      |> Enum.join("\n")

    Create.call(%{report_text: messageText})

    new_email(
      to: emailsToSend,
      from: fromEmail,
      subject: "Daily Report: " <> to_string(Date.utc_today()),
      html_body: "<h1>Hello</h1>",
      text_body: messageText
    )
  end
end
